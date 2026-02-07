import mongoose from 'mongoose';
const { Schema } = mongoose;

const MessageSchema = new Schema({
    conversationId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
},{
    timestamps:true // bydeafult gonna give me createdAt and updatedAt
  });
export default mongoose.model("Message",MessageSchema)