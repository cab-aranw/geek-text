import{IncomingForm} from 'formidable'//we are getting information
import{user} from '../../models/userModel'
class AccountManager{
    UpdateUSerInfo(reques,response){
        const form = new IncomingForm();
        try{
            form.parse(request,(error,fields,files) => {
              if (error)  {
                return response.status(500).json({msg :'Network Error: Failed to update personal information '})
              }
              const {name,email,nickname,home_address} = fields;//Expecting at least one data from the list
              if(!name && !email && !nickname && !home_address){
                    return response.status(400).json({msg: 'At least 1 field is required'})
              }

              const userSession = request.user.data; 
              console.log(userSession);
            })
        }catch (error){
            return response.status(500).json({msg :'Network Error: Failed to update personal information '})
        }
    }
}

export {AccountManager}