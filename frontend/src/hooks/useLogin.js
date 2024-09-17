import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
    
    const [loading, setLoading] = useState(false)
    const {setAuthUser}  =useAuthContext()
    const login = async(username, password)=>{
        const succcess = handleInputErrors({username, password}) 
        //this function would return false if there is anyy error spotted out 
        if(!succcess) return; 
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST", 
                headers:{ "Content-type":"application/json"},
                body: JSON.stringify({username, password})
            })
            const data = await res.json(); 
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data); 
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, login};
}

export default useLogin



function handleInputErrors({ username, password}){
    if( !username ||  !password ){
        //for displaying the errors, hot toast library is used 
         toast.error('Please fill in all the fields')
         return false;
    }
    
    return true;
}