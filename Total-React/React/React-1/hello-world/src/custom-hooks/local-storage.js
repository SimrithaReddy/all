import { useEffect, useState } from "react";

const useLocalStorage = (initialState={}) => {
    const [localStorage, setLocalStorage] = useState(initialState)
    //{firstname, lastName, age}

    useEffect(()=>{
        // const keys = Object.keys(localStorage)
        //[firstName, lastName, age]

        for(let key in localStorage){
            window.localStorage.setItem(key, localStorage[key])
        }

    },[localStorage])

    return [setLocalStorage]
}
export default useLocalStorage;