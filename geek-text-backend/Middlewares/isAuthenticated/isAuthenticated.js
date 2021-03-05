import jwt, { decode } from 'jsonwebtoken'; //jwt verifies 1 if the user is loggged in, 2 is the session still available
import {config} from 'dotenv'; // Helps us to access our environment variables
config();
//cookie_secret

export const isAuthenticated = (reques,response,next) =>{
    const token = request.headers['x-auth-token'];
    jwt.verify( token,process.env.cookie_secret,(error,decode) =>{
        if(error){
            return response.status(400).json({msg:'Login or SignUp to update personal information'})
        }
        request.user = decoded;//We logged out decoded
        next()//The user is kicked out
    })

}