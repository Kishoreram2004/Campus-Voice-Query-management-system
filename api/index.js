import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouters from "./routes/user.route.js"
import authRouters from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import path from 'path';

dotenv.config()

mongoose
 .connect(process.env.MONGO)
 .then(()=>{
    console.log("database is connected")
    })
 .catch(err=>{
    console.log(err);
})

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/user",userRouters)
app.use("/api/auth",authRouters)
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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