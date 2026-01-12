  import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const Protect=async (req,res,next)=>{
    let token;
    if(req.headers.authorization &&req.headers.authorization.startsWith("Bearer ")){
       try{
         token=req.headers.authorization.split(" ")[1]
        const decode=jwt.verify(token,process.env.Jwt_Secreat)
        req.user=await User.findById(decode.id).select("-password")
        return next()
       } 
       catch(err){
        console.log("Token verification failed",err.message)
        return res.status(401).json({msg:"Not authorized token failed"})
       }
    }
    return res.status(401).json({msg:"Not authorized,token failed"})
}