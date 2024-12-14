import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouters from "./routes/user.route.js"

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

app.use("/api/user",userRouters)

app.listen(3000,()=>{
    console.log("server running in port 3000")
})

