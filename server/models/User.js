import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:String,
    name:String,
    password:String

})

export default mongoose.model("Users",userSchema);