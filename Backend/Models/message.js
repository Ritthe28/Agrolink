 import mongoose from "mongoose";
 const messageschema = new mongoose.Schema({
senderid :{
    type:mongoose.Schema.Types.ObjectId, ref :"user", required:true},
    receiverid :{
    type:mongoose.Schema.Types.ObjectId, ref :"user", required:true},
    text:{type:String},
    image :{type:String},
    seen:{type :Boolean,  default :false}
 }, {timestamps:true})

const message = mongoose.model("message", messageschema )

export default message