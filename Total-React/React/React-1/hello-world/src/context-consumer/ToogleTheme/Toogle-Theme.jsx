import { ThemeContext } from "../../context/notification-provider";
import { useContext } from "react";

const ToogleTheme = ()=>{
    const {ToggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <button onClick={ToggleTheme}>Toogle Theme</button>
        </div>
    )
};
export default ToogleTheme;