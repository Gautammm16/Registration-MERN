import express from "express";
import mongoose, { mongo } from "mongoose";
import userRoutes from "./routes/RegistrationRoutes.js"
const app = express();
import User from "./models/User.js";
import cors from "cors";
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));


mongoose.connect("mongodb://127.0.0.1:27017/registration")
const db = mongoose.connection;

db.once("open",()=>{
    console.log("mongo db connection established successfully");
})
app.use('/api',userRoutes)

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
