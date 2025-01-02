import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouters from "./routes/user.route.js"
import authRouters from "./routes/auth.route.js"

dotenv.config()

mongoose
 .connect(process.env.MONGO)
 .then(()=>{
    console.log("database is connected")
    })
 .catch(err=>{
    console.log(err);
})

const app = express();
app.use(express.json());

app.use("/api/user",userRouters)
app.use("/api/auth",authRouters)

app.listen(3000,()=>{
    console.log("server running in port 3000")
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})