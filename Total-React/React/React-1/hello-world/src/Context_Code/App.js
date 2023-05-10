import { createContext } from "react";

export const UserContext = createContext();

export const App = ({children})=>{

   

    return(
        <div>
            <UserContext.Provider value={{name:"10xAcademy", age:3}}>
                {children}
            </UserContext.Provider>
        </div>
    )
}