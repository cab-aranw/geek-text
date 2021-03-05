import { Router } from 'express'
import { AuthController } from '../../Controller/Auth/Auth'


const router = Router();
const Controller = new AuthController();
//
router.post('/api/signup', (request, response)=>{
  Controller.Signup(request, response)
})

router.post('/api/signin', (request, response)=>{
  Controller.Signin(request, response)
})


export default router
