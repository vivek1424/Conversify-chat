import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    recieverId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    },
    message:{
        type:String,
        required:true 
    }
    //created at, updated at 
}, {timestamps:true});

//give the name of message to the model and then export the message 
const Message = mongoose.model("Message", messageSchema )

export default Message;

