import mongoose from "mongoose";
// import isEmail from "validator/lib/isEmail";


const userschema= new mongoose.Schema({
    email :{type:String, required:true, unique:true},
         fullname :{type :String , required:true},
         password :{type:String, required:true, minlength:6},
         profilepic :{type:String, default:"" },
         bio :{type:String  },
},
{
    timestamps:true
}
)
const user = mongoose.model("user",userschema);
export default user;
