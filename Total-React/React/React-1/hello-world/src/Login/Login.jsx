import { useState } from "react";
import useLocalStorage from "../custom-hooks/local-storage";

const LoginPage = ()=>{
    const [userName, setUserName] = useState("")
    const [setLocalStorage] = useLocalStorage({})
    const userLogin = ()=>{
        setLocalStorage({user: userName, isAuthenticated: true})
    }

    return(
        <div>
            <input onChange={(e)=>{ setUserName(e.target.value) }} value={userName}></input>
            <button onClick={userLogin}>Login</button>
        </div>
    )
}
export default LoginPage;