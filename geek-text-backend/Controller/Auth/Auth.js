import formidable from 'formidable'
import { hash, genSalt, compare } from 'bcrypt';
import { user } from '../../models/userModel.js';
import { generateToken } from '../../Utils/Token.js'

export class AuthController{

  Signup(request, response){
    try {
      const form = new formidable.IncomingForm();
      form.parse(request, async (error, fields, files)=>{
        if (error){
          return response.status(500).json({msg:"Network Error: Failed to signup user"})
        }
        const { email, name, nickname, password } = fields;
        if (!email || !name || !nickname || !password){
          return response.status(400).json({msg:'All fields are required'})
        }

        if (password.length < 8){
          return response.status(400).json({msg:'Password has to be at least 8 characters long'})
        }

        const isEmailExisting = await user.findOne({email:email})
        if (isEmailExisting){
          return response.status(400).json({msg:'Account with this email already exist'})
        }

        const salt = await genSalt(15);
        const hashedPassword = await hash(password, salt)

        const newUser = new user({
          email,
          name,
          nickname,
          password:hashedPassword
        })

        const savedUser = await newUser.save();

        return response.status(201).json({msg:'Account Successfuly created'})

      })
    } catch (error) {
      return response.status(500).json({msg:"Network Error: Failed to signup user"})
    }
  }
  //Validating the signin of the user

  Signin(request,response){
    const form = new formidable.IncomingForm();
    try{
      form.parse(request,async (error,fields,files) =>{
        if (error){
          return response.status(500).json({msg : 'Network Error: Failed to sign you in'})
        }
        const {email,password} =fields
        //Making sure that the user types the email and password
        if (!email || !password){
          return response.status(400).json({msg : 'All fields are required OJO...'})
        }
        const isEmailExisting = await user.findOne({email:email}) //Interacting with mongoDB
        if (!isEmailExisting){
          return response.status(404).json({msg: 'Account with this email does not exist'})
        }

        const user_Account = isEmailExisting;
        //validating the password
        const hashedPassword = user_Account.password;
        const isPasswordValid = await compare(password, hashedPassword);

        if (!isPasswordValid){
          return response.status(400).json({msg:'Invalid credentials'})
        }
        
        const id = user_Account._id;
        const user_email = user_Account.email
        const token = generateToken(id, user_email)

        return response.status(200).json({token : token})


      })

    }
    catch(e)
    {
      return response.status(500).json({msg : 'Network Error: Failed to sign you in'})
    }
  }
}


