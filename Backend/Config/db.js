
import mongoose from "mongoose";


const connectdb = async()=>{
try {

     await mongoose.connect("mongodb://localhost:27017/Farmer-App")
     
     console.log("monoose made connection successfully");
     
     
} catch (error) {
     
}
}


export {connectdb}





























































// import mongoose from "mongoose";


// // Function to connect with the mongodb Database 

// export const connectdb = async ()=>{
//     try{

//               await mongoose.connect("mongodb://localhost:27017/Farmer-App")
//          mongoose.connection.on("Connected", ()=>{
//             console.log("Database Connected "); 
//          })

//     }catch (e){
//          console.log(e);
         
//     }
// }



