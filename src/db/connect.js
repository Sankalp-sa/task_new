import mongoose from 'mongoose';

const mongoDB_url = "mongodb+srv://sankalp123:sanku2003@cluster0.yvjsgnz.mongodb.net/testDB";

export const connectDb = async () => {

    try {
        await mongoose.connect(mongoDB_url);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
}