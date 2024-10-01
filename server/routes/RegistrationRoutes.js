import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.get("/getusers",async(req,res)=>{
    const findUser = await User.find();
    if(!findUser) return res.json({mess:"no user found"});
    res.json(findUser)
})


router.post('/createuser',async(req,res)=>{
   
    const postUser = await User.create(req.body);
    if(!postUser) return res.json({message:"no user created"});
    res.json(postUser)
})


// router.delete("/deleteuser/:id",async(req,res)=>{
//     const deleteUser = await User.findByIdAndDelete(req.params.id,req.body);
//     if(!deleteUser) return res.json({message:"not deleted Successfully"})
//         res.json({message:"user deleted successfully"})
// })

router.post("/login",async(req,res)=>{
   const {username,password}= req.body;
   User.findOne({username:req.params.username})
   .then(u=>{
    if(u){
        if(u.password==password){
            res.json("success")
        }else{
            res.json("unsuccessfull")
        }
    }else{
        res.json("no username found")
    }
   })

    
})

export default router;