///////////////////---------3rd code Schema------------/////////////////////

import mongoose from "mongoose";

const sch = new mongoose.Schema({
    username :{type:String,required:true},
    password :{
        type :"String",
        required:true
    }
})


const LoginSchema = mongoose.model("LoginSchema",sch);
export default LoginSchema;


