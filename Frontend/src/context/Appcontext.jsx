
import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const appcontext = createContext();

const Appcontextprovider =({children})=>{
    const [isloggedin , setisloggedin]=useState(false);
    
const navigate = useNavigate();

var data = 76;

    
    
    
    
    const value = {
        data,navigate,isloggedin , setisloggedin
    }
    return <appcontext.Provider value={value}>
    {
        children
    }
     </appcontext.Provider>
}

 export const useappcontaxt =()=>{

     
     return  useContext(appcontext);

}


export default Appcontextprovider;


