import {Router}   from 'express';
import {AccountManager}   from '../../Controller/AccountManager/AccountManager';
import {isAuthenticated} from '../../Middlewares/isAuthenticated/isAuthenticated'

const router = Router ();
const Controller = new AccountManager();

/*router.post('/api/personal-info', isAuthenticated,(request,response) =>{
    Controller.UpdateUserInfo(request,response)
})*/

export default router