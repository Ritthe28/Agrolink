import jwt from "jsonwebtoken";

///////function to generate a token for a user  




export const generatetoken = (userid )=>{
    const token = jwt.sign({userid}, process.env.JWT_sECRETE);
    return token;
}



