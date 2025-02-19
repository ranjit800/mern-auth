import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app = express()
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
})






app.listen(3000, ()=>{
    console.log('server running on port 3000')
});