import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
dotenv.config()
const PORT=process.env.Port||5000
const app=express()
app.get("/",(req,res)=>{
    res.send("hi server running")
})
connectDB()

app.listen(PORT,(req,res)=>{
    console.log(`server running at ${PORT}...........`)
})