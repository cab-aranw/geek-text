import jwt from 'jsonwebtoken';
import { config} from 'dotenv'
config();

export const generateToken = (id, email) =>{
    return jwt.sign(
        {
            data:{
                id,
                email
            }
        },
        process.env.cookie_secret,
        {
            expiresIn:'365d'
        }
        

    )
}