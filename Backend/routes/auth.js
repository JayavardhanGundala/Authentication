import express from "express"
import User from "../models/user.js"
//Register
const router=express.Router()
router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    try{
        if(!username || !email || !password){
            return res.status(400).json({message:"please fill all the details"})
        }
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({msg:"User exists"})
        }

        const user=await User.create({username,email,password})
        res.status(201).json({id:user._id,username:user.username,email:user.email})

    }
    catch(err){
        res.status(500).json({message:"server error"})

    }
})
