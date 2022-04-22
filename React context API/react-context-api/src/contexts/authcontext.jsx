import { createContext, useState, } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isauth,setauth] = useState("false");

    const handleauth = (value) => {
       if(value==="false")
       {
           setauth("true")
       }else{
           setauth("false")
       }
    }
    return (

        <AuthContext.Provider value={{ isauth, handleauth}}>
            {children}
        </AuthContext.Provider>
    );
};