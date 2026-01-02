import express from "express";
import { signup,login } from "../Controllers/authController.js";

const authrouter = express.Router();

authrouter.post("/signup", signup);
authrouter.post("/login", login);

export default authrouter;
