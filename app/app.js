import express from "express";
import dbConnect from "../config/dbConnect.js";
import dotenv from 'dotenv';
import userRoutes from "../routes/usersRoute.js";
import { globalErrorHandler,notFound } from "../middlewares/globalErrorHandler.js";
import productsRouter from "../routes/productsRoute.js";

dotenv.config();
//db connect 
dbConnect();
const app = express();

// middlewares
app.use(express.json());
// routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productsRouter)
//err middleware
app.use(notFound);
app.use(globalErrorHandler);
export default app;
