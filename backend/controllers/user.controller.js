import User from "../models/user.model.js";

export const getUsersForSidebar = async(req, res)=>{
    try {
 
        const loggedInUserId = req.user._id  ; 
        const filteredUsers  = await User.find({_id : {$ne: loggedInUserId}}).select("-password") //all users except us, remove the password from displaying details  
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}


//this controller is for displaying the list of the users 