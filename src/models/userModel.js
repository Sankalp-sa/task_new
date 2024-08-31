import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    address: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("users", userSchema);

export default userModel;