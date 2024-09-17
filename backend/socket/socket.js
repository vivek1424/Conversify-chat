import { Server } from "socket.io";
import http from 'http';
import express from 'express'

const app = express()

const server =http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5175"],
        methods: ["GET", "POST"]
    }
} ); 

//this will give socket id for the reciever
export const getRecieverSocketId = (recieverId)=>{ 
    return userSocketMap[recieverId];
}

//stores the socket id of the users who use socket server 
const userSocketMap = {}; 

// this event listener triggers on new connection, new socket object is created
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;  //(server accesses the userid thru handshake)
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

	// socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});



export {app, io, server}