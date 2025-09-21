import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

export const authcontext= createContext();


export const Authprovider= ({children})=>{
const backendurl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL= backendurl;
const [token , settoken ]= useState(localStorage.getItem('token'));
const [authuser, setauthuser ]= useState(null);
const [onlineuser, setonlineuser] = useState([]);
const [socket, setsocket ]  = useState();
const checkauth = async ()=>{
    try {
      const {data}=  axios.get("/api/auth/check");
if (data.success){
    setauthuser(data.user);
    connectsocket(data.user)

}
    }catch(error){
       { toast.error(error.message);
}
        
    }
}

// Connect socket function to handle socket connection and online user update
const connectsocket = (userdata)=>{
if (!userdata ||socket?.connected){
    return;}

    const newsocket = io(backendurl, {
        query:{
userid :userdata._id,

        }
    });
    newsocket.connect();
    setsocket(newsocket);
    newsocket.on("getonlineusers",(userids )=>{
setonlineuser(userids)
    })
}


useEffect(()=>{
if (token){
    axios.defaults.headers.common["token"]= token;

}
},[])

    const value = {
axios, backendurl
    };



    return <authcontext.Provider value={value}>

{children}


    </authcontext.Provider>

}