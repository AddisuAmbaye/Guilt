import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler"
//user registeration 
export const userRegisterCtrl = asyncHandler(
    async (req, res) => {
        const { fullname,email,password } = req.body;
        const user = await User.findOne({email});
        if(user){
            throw newError("User already registered");
        }
        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            status: "success",
            message: "user registered successfully",
            data: newUser
        });  
}
) 
//user login 
export const userLoginCtrl = asyncHandler(
    async (req, res, next) => {
        const { email,password } = req.body;
        const userFound = await User.findOne({email});
        if(userFound && await bcrypt.compare(password, userFound?.password)){
            return res.json(userFound);
        }
       else{
         throw new Error("Invalid login credentials")
       }
}
) 