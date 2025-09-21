import express from "express";
import { checkauth, login, signup, updateprofile } from "../Controllers/usercontroller.js";
import { protectroute } from "../Middleware/auth.js";


const userrouter = express.Router();
userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.post("/updateprofile", protectroute ,updateprofile )
userrouter.post("/check", protectroute ,checkauth );


export default userrouter;










