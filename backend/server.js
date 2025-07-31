import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app=express();
const port = 4000;

dotenv.config();
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());
app.use('/api/ai',requireAuth(),aiRouter);
app.use('/api/user', requireAuth(),userRouter);


app.get('/',(req,res)=>
{
    res.send("Hello from Ashish")
});




app.listen(port,()=>
{
    console.log(`Server is running on port ${`http://localhost:${port}`}`);
});