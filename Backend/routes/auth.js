import express from "express"
import User from "../models/user.js"
import { Protect } from "../middleware/auth.js"
import jwt from "jsonwebtoken";
//Register
const router=express.Router()
router.post('/register',async (req,res)=>{
    const {username,email,password}=req.body ; 
    try{
        if(!username || !email || !password){
            return res.status(400).json({message:"please fill all the details"})
        }
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({msg:"User exists"})
        }

        const user=await User.create({username,email,password})
        const token=generatetoken(user._id)
        res.status(201).json({id:user._id,username:user.username,email:user.email,token})

    }
    catch(err){
        console.error(err)
        res.status(500).json({message:`server error:${error}`})

    }
})

///login
router.post("/login", async (req,res)=>{
    const {email,password}=req.body
    try{
        if(!email || !password){
            return res.status(400).json({message:"please fill the details"})
        }
        const user=await User.findOne({email})
        if(!user || !await user.matchPassword(password)){
            return res.status(401).json({msg:"Invalid credentials"})
        }
        const token=generatetoken(user._id)
        res.status(200).json({id:user._id,username:user.username,email:user.email,token})

    }
    catch(err){
        res.status(500).json({message:"server error"})

    }

})
//Me
router.get("/me",Protect, async (req,res)=>{
    res.status(200).json(req.user)
})

//Generate jwt
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.Jwt_Secreat,{expiresIn:"30d"})
}
export default router