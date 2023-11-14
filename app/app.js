import express from "express";
import dbConnect from "../config/dbConnect.js";
import dotenv from 'dotenv';
import userRoutes from "../routes/usersRoute.js";
import { globalErrorHandler } from "../middlewares/globalErrorHandler.js";

dotenv.config();
//db connect 
dbConnect();
const app = express();

// middlewares
app.use(express.json());
// routes
app.use('/api/v1/users', userRoutes)
//err middleware
app.use(globalErrorHandler);
export default app;
