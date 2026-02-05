import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
  id:{
    type:String,
    required:true,
    unique:true,
  },
  sellerId:{
    type:String,
    required:true,
  },
  buyerId:{
    type:String,
    required:true,
  },
  readByseller:{
    type:Boolean,
    required:true,
    default:false
  },
  readBybuyer:{
    type:Boolean,
    required:true,
    default:false
  },
  lastMessage:{
    type:String,
    required:false,
  }
},{
    timestamps:true // bydeafult gonna give me createdAt and updatedAt
  });
export default mongoose.model("Conversation",ConversationSchema)