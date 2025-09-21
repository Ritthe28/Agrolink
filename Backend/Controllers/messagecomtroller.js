// Get all users except the logged in user 

import message from "../Models/message.js";
import user from "../Models/User.js";

import {v2 as cloudnary} from "cloudinary"

import { io,usersocketmap } from "../index.js";
export const getusersforsidebar =  async (req,res)=>{


   try {
    const  userid = req.userdata._id ;
    const filteredusers= await user.find({_id:{$ne:userid}}).select("-password");


    // count  no. of messages not seen 
       const unseenmessages = {};
       const promises =     filteredusers.map(async(User)=>{
        const Messages  = await message.find({senderid:User._id, receiverid:userid, seen:false})
        if (Messages.length>0){
            unseenmessages[User._id]= Messages.length;
             }


       })

         await Promise.all(promises);
         res.json({success:true, users:filteredusers, unseenmessages});
   } catch (error) {
              console.log(error.message);
              res.json({success:fslae , message :error.message })
                  
   }


}

// Get all messages for Selected user


export const getmessages =  async  (req,res)=>{
     try {
       const {id :selecteduser }= req.params;
       const myid = req.userdata._id;
       const messages = await message.find({
        $or:[
            {senderid:myid, receiverid:selecteduser},
            {senderid:selecteduser, receiverid:myid},
        ]
       });
       await message.updateMany({senderid:selecteduser,receiverid:myid}, {seen:true});
          
res.json ({success:true , messages})
       
    } catch (error) {
        console.log(error.message);
        res.json ({success:false ,message :error.message })
        
     }
}


// Api to mark message as seen using message id   

export const markmessageseen = async(req,res)=>{
   try {
      const {id }= req.params;
      await message.findOneAndUpdate(id , {seen:true });
      res.json({success:true});
      


   }catch (error ){
      console.log(error.message );
      res.json({success:false, message :error.message });

      
   }
}



// Send Message to selected user 


export const sendmessage = async (req,res)=>{



const {text , image }=  req.body;
const receiverid =  req.userdata._id;
let imageurl ;
try {
   

if (image){
   const uploadresponce = await cloudnary.uploader.upload(image);


   imageurl= uploadresponce.secure_url;
    
}
const newMessage = await message.create({
   senderid,
   receiverid,
   text,
   image:imageurl
   
});

// Emit new Message to the receivers socket   
const receiversocketid =  usersocketmap[receiverid];
if (receiverid){
   io.to(receiversocketid).emit("newMessage", newMessage);

}   
res.json({success:true , newMessage});


} catch (error) {
   console.log(error.message);
   res.json({success:false , message :error.message })
   
}
}



