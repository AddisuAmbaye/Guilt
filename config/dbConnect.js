import mongoose from "mongoose";

const dbConnect = () => {
    try{
       mongoose.connect(process.env.MONGO_URL);
       console.log("Database connected successfully!");
       
    }  
    catch(err){
        throw new Error(err.message);
        process.exit(1);
    }  
}

export default dbConnect;


