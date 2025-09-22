
import { Children, createContext } from "react";


export const appcontext = createContext();

const Appcontextprovider =({Children})=>{
    
    let data = 76767676;

    
    
    
    
    const value = {
        data
    }
    return <appcontext.Provider value={value}>
    {
        Children
    }
    </appcontext.Provider>
}


