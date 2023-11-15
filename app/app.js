import express from "express";
import dbConnect from "../config/dbConnect.js";
import dotenv from 'dotenv';
import userRoutes from "../routes/usersRoute.js";
import productsRouter from "../routes/productsRoute.js";
import categoriesRouter from "../routes/categoriesRoute.js"
import { globalErrorHandler,notFound } from "../middlewares/globalErrorHandler.js";


dotenv.config();
//db connect 
dbConnect();
const app = express();

// middlewares
app.use(express.json());
// routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/category', categoriesRouter)
//err middleware
app.use(notFound);
app.use(globalErrorHandler);
export default app;
