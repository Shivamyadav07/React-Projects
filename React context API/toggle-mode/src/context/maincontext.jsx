import { createContext, useState } from "react";

export const DivContext = createContext();


export const DivContextProvider = ({ children }) => {
    const [Toggle,settoggle]=useState(true);

    function handletoggle()
    {
        if(Toggle===true)
        {
            settoggle(false);
            console.log(Toggle);
        }
        else 
        {
            settoggle(true);
            console.log(Toggle);
        }
    }

    return <DivContext.Provider value={{Toggle,handletoggle}}>
        {children}
    </DivContext.Provider>
}