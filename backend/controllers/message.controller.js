import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage= async(req, res)=>{
   try {
     const {message }= req.body ; //getting the message from the user 
     const {id : recieverId}=req.params;  
     const senderId = req.user._id;  //taking the user id from the user 

     //findOne is used to retrive the document corresponding to the ID in parameter 
     //this function tries to find the if conversation which involves the sender-reciever present?  
     let conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId]},
     })

     //if they have not had conversation yet, create one 
     if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, recieverId]
            //no need to initialize message array since it is there by default 
        })
     }
    
     //taking the newMessage using the Message model
     const newMessage = new Message({
        senderId,
        recieverId,
        message 
     })

     //if new message is created succesfully 
     if(newMessage){
        conversation.messages.push(newMessage._id);
     }

     //Socket IO functionality to be written here 


    //  await conversation.save();
    //  await newMessage.save() ; 

    //this will run parallely, while above code will run one after another so this is more efficient
    await Promise.all([conversation.save(), newMessage.save()]);


     res.status(201).json(newMessage) ; //this will display the message at the postman 

   } catch (error) {
        console.log("Error in sendmessage controller:", error.message )
        res.status(500).json({error:"Internal server error"});

   }
}

export const getMessage =async(req, res)=> {
    
    try {
        const { id:userToChatId }= req.params;  //id of the user we are chatting with 
        const senderId = req.user._id; 

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]},       
        }).populate("messages");

        res.status(200).json(conversation.messages);
        

    } catch (error) {
        console.log("Error in getmessage controller:", error.message )
        res.status(500).json({error:"Internal server error"});
    }
}