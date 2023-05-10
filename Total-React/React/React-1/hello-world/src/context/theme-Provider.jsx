import { ThemeContext } from "./notification-provider";
import { useState } from "react";

const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(0);
    const ToggleTheme = ()=>{
        setTheme(!theme);
    }

    return(
        <div>
            <ThemeContext.Provider value={{theme, ToggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
};
export default ThemeProvider;