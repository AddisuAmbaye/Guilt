import express from 'express';
import { userRegisterCtrl,userLoginCtrl } from '../controllers/usersCtrl.js';

const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);

export default userRoutes;  