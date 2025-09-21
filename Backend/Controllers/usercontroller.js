import { generatetoken } from "../lib/utils.js";
import user from "../Models/User.js";
import bcrypt from "bcrypt"
import {v2 as cloudnary} from "cloudinary";


export const signup = async (req,res)=>{
    const {fullname , email, password , bio}= req.body;
    try{
        if (!fullname||!email||!password||!bio){
            return res.json ({success:false, message :"Missing Details"})
        }
        const  User = await user.findOne({email});
        if (User){
            return res.json({success:false , message:"Account already exist"});

        }
      const salt = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password,salt);
       const newuser = await user.create({
        fullname,
        email,
        password:hashedpassword, bio
       });
       const token = generatetoken(newuser._id);


       res.json({success:true ,  userdata :newuser,token, message:"Account created successfully  "});
        
    }catch (error){
        console.log(error.message );  
        res.json({success:false , message:error.message })     
    }

}


export const login = async(req,res)=>{

    try {
        const {email , password }= req.body ;
        const userdata = await user.findOne({email});

           const ispasswordcorrect = await bcrypt.compare(password, userdata.password )




           if (!ispasswordcorrect)
{
    return res.json({success :false , message :"Invalid credential"})
}


const token = generatetoken(userdata._id);
  res.json({success:true ,  userdata ,token, message:"logged in successfully"});


    } catch (error) {
        console.log(error.message );

        res.json({success:false,message:error.message});

        
    }

}


// check wheather  user is  authenticated or not 

export const checkauth = (req,res )=>{
    res.json({success:true ,  user :req.userdata })
}



// Controller to update user profile 
export const updateprofile = async(req,res)=>{
    try{
        const {profilepic ,  bio , fullname }= req.body;
        const userid =  req.userdata._id;
         let updateduser;
          if (!profilepic){
            updateduser = await  user.findByIdAndUpdate(userid,{bio, fullname}, {new:true})
          }
          else{
            const upload = cloudnary.uploader.upload(profilepic);
            updateduser=await user.findByIdAndUpdate(userid,{profilepic:upload.secure_url,bio ,fullname}, {new:true});

          }
              
         res.json({success:true  , user :updateduser})


    }catch(error){

console.log(error);

        res.json({success :false , message:error.message });


    }
}

 