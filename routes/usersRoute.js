import express from 'express';
import { userRegisterCtrl,userLoginCtrl } from '../controllers/usersCtrl.js';

const userRouter = express.Router();

userRouter.post('/register', userRegisterCtrl);
userRouter.post('/login', userLoginCtrl);

export default userRouter;  