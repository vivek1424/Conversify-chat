import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
dotenv.config();
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js"
import userRoutes from "./routes/user.routes.js"
import bodyParser from 'body-parser';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

app.use(express.json());  //to get the info from the req.body 
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);  //for the users 
// app.get("/", (req,res)=>{
//     res.send("Hello world, server is being updated. WC to world of programming")
// })



server.listen(PORT, ()=>{ 
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)}
);
