import express, { urlencoded } from "express"
import cors from "cors";
import connectcloudnary from "./Config/connectcloudnary.js";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express({urlencoded:true}));
connectcloudnary();



app.listen(port, ()=>{
console.log("listening the port: ", 3000);

})
