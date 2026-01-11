import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import authroutes from "./routes/auth.js"
dotenv.config()
const PORT=process.env.Port||5000
const app=express()
app.use(express.json())
app.use("/api/users",authroutes)
connectDB()

app.listen(PORT,(req,res)=>{
    console.log(`server running at ${PORT}...........`)
})