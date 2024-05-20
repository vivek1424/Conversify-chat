import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to the MongoDB")
    } catch (error) {
        console.log("Error connecting to the MongoDB", error.message)
    }
}

export default connectToMongoDB;