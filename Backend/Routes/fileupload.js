import express from "express";


const fileupload= express.Router();


fileupload.get ("/hello", (req,res)=>{
    console.log("Heloow...........iam i the Router");
    res.json({success:true,message:"hello from fileupload"})
    
})

export default fileupload