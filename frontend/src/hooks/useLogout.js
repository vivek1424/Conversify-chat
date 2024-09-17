

import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { set } from 'mongoose';
import toast from 'react-hot-toast';
import e from 'express';
import { useState } from 'react';

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setauthUser} = useAuthContext(); // getting some values from the auth context 
    const logout = async() =>{
        setLoading(true)
        try {
            const res =await fetch("/api/auth/logout", {
                method:"POST", 
                headers:{ "Content-Type": "application/json"} 
            });
            
            const data = await res.json(); 
            if(data.error){
                throw new Error(data.error)
            }
           

            localStorage.removeItem("chat-user");
            sessionStorage.removeItem("chat-user"); 
            setauthUser(null); 
            toast.success('Logged out succesfully');
            
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    };

    return {loading, logout};
  
};

export default useLogout;
