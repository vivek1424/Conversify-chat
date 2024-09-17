import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
    const [loading, setloading] = useState(false)
    const {setauthUser}= useAuthContext()
    const signup = async({fullName, username, password, confirmPassword, gender }) =>{
        const succcess = handleInputErrors({fullName, username, password, confirmPassword, gender}) 
        //this function would return false if there is anyy error spotted out 
        if(!succcess) return; 
        setloading(true)
        try {

            //res is taking up the data from the fetch 
           const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({fullName, username, password, confirmPassword, gender})
           })

           const data = await res.json() ; 
           if(data.error){
            throw new Error(data.error)
           }

           //console.log(data); 

           localStorage.setItem("chat-user", JSON.stringify(data))
           setauthUser(data); 

        } catch (error) {
            toast.error(error.message)
        } finally{
            setloading(false);
        }
    };

   return {loading, signup} ;
}

export default useSignup;


function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username ||  !password ||  !confirmPassword ||  !gender){
        //for displaying the errors, hot toast library is used 
         toast.error('Please fill in all the fields')
         return false;
    }
    if(password!==confirmPassword){
        toast.error('Passwords do not match')
        return false;
    }
    if(password.length < 6){
        toast.error('Passwords must be at least 6 characters')
        return false;
    }
    return true;
}