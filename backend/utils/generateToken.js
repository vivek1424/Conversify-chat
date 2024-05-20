import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:'15d'  //gives the condition that it expires in 15 days 

    })

    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000, // in the miliseconds format 
        httpOnly: true, //this is used to prevent the cross site scriptig attacks 
        sameSite: "strict",
        secure: process.env.NODE_ENV !=="development" //secure would be true when we are in production  
        
    })
}

export default generateTokenAndSetCookie;