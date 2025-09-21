import express from "express";

import { protectroute } from "../Middleware/auth.js";
import { getmessages, getusersforsidebar, markmessageseen, sendmessage } from "../Controllers/messagecomtroller.js";






const messagerouter = express.Router();
messagerouter.get("/users", protectroute, getusersforsidebar);

messagerouter.get("/:id",protectroute, getmessages);
messagerouter.put("/mark/:id",  protectroute, markmessageseen);
messagerouter.post("/send/:id",protectroute,sendmessage)
export default messagerouter
