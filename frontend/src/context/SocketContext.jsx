 import { createContext, useContext, useEffect, useState } from "react";
import {  useAuthContext } from "./AuthContext";
import { io } from "../../../backend/socket/socket";
import { query } from "express";


//this code allows to have socket connection and the online Users throughout the application 
 export const SocketContext = createContext(); 

 export const useSocketContext = ( )=> { 
    return useContext(SocketContext);
 }

 export const SocketContextProvider = ({children})=> { 
    const [socket, setSocket]= useState(null);
    const [onlineUsers, setOnlineUsers]=useState([])
    const {authUser}= useAuthContext()

    useEffect(() => {
      if(authUser){ 
        const socket = io("http://localhost:8000", { 
            query: { 
                userId: authUser._id,
            }
        })

        setSocket(socket);

         //server sends the users which are online,and that is updated with system 
        socket.on("getOnlineUsers", (users)=>{
            setOnlineUsers(users);
        })

        return ()=> socket.close() ; 
      }else{ 
        if(socket){
            socket.close();
            setSocket(null)
        }
      }
    }, [authUser])
    

    return (
        <SocketContext.Provider value={{onlineUsers, socket }}>
            {children}
        </SocketContext.Provider>
    )

 }