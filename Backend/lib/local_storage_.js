//local Storage to upload images 

import multer from "multer";


const storage = multer.diskStorage({
    filename:(req,file, nest)=>{
nest(null, Date.now()+file.originalname);

    },
    destination :(req,res,nest)=>{
nest(null, "./assets")
    } 
})


const upload=  multer({storage:storage});


export  default upload;

