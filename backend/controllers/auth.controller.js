import bcryptjs from "bcryptjs"; //this is used to protect the sensitive data 
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });  //returns the document that matches the username
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || ""); //in case the user fails, 
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePic
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: " Internal server error" })
    }
}

export const logout = (req, res) => {

   try {
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({ message: "Logged out succesfully"})  
   } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: " Internal server error" })
   }
}

export const signup = async (req, res) => {

    try {
        console.log("welcome to the signup page")
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" })
        }

        const user = await User.findOne({ username }); //check whether the username already present 
        if (user) {
            return res.status(400).json({ error: " Username already exists" })
        }

        //hash password here 
        const salt = await bcryptjs.genSalt(10); //higher the value more secure but will take more time 
        const hashedPassword = await bcryptjs.hash(password, salt)

        //api for the profile pictures 
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            //generate jwt token 
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();  //save this to the database
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data " })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: " Internal server error" })
    }
}
