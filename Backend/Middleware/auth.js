/////Middleware to protect Route
import jwt from "jsonwebtoken"
// import user from "../Models/User.js";
import user from "../Models/User.js";
export const  protectroute = async (req,res, next )=>{
    try {
        const token = req.headers.token;
        const decoded =jwt.verify(token , process.env.JWT_sECRETE );
        const userdata = await  user.findById(decoded.userid).select("-password");

if (!userdata){
    return res.json ({success:false, message :"User not found "});

}
req.userdata= userdata;
next();

    } catch (error) {
        console.log(error);
        res.json({success :false , message:error.message })
        
    }
}

