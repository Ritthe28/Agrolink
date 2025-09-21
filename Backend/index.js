import express from"express";
// import "dotenv/config";
import  cors from "cors";
import http from"http";
import { configDotenv } from "dotenv";
import { connectdb } from "./lib/db.js";
import connectcloudnary from "./Config/connectcloudnary.js";
import userrouter from "./Routes/userroutes.js";
import messagerouter from "./Routes/messageroutes.js";
import { Server } from "socket.io";
import { env } from "process";



configDotenv();
 await connectdb();

// Create Express app and HTTP server
connectcloudnary();

const app= express();
const server =   http.createServer(app);

export const io = new Server(server,{cors:{origin:"*"}})

export    const usersocketmap={};


io.on("connection",(socket)=>{
   const userid= socket.handshake.query.userid;
   console.log("User Connected",  userid);
   if (userid)usersocketmap[userid ]= socket.id;
     io.emit("getonlineusers",Object.keys(usersocketmap));
     socket.on("disconnect ", ()=>{
        console.log("user disconnected ", userid);
        delete  usersocketmap[userid];
        io.emit("getonlineusers", Object.keys(usersocketmap));
        
        
     })
//    emit online useers to all connected clients ;
 

  })




app.use(express.json({limit:"4mb"}));
app.use(cors());

app.get("/api/status",(req,res)=>{
    res.send("Server is Live");

})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/api/auth", userrouter); 
app.use("/api/messages", messagerouter); 



const PORT=process.env.PORT|| 5000;


server.listen
(PORT, ()=>{
    console.log("Listening", PORT);
    
})


