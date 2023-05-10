import { createContext } from "react";
import { useState } from "react";

export const NotificationContext = createContext();
export const ThemeContext = createContext();

export const NotificationProvider = ({children})=>{

    const [count, setCount] = useState(0)
    const data = `Some Notification Triggerd`
    const handleCounter = (type)=>{
        switch(type){
            case "Increment" :
                setCount(count+1);
                break;
            case "Decrement" :
                setCount(count-1);
                break;
        }
    }

    return(
        <div>
            <NotificationContext.Provider value={{notification: data, count,handleCounter}}>
                {children} 
            </NotificationContext.Provider>
        </div>
    )
}


//{props}
//{props.children}