import mongoose from "mongoose";


const db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    }
    catch(err){
        console.log("Failed to connect");
    }
}

export default db;