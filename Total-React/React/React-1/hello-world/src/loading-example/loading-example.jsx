import React ,{ useState, useEffect } from "react";
import loader from "./giphy.gif"

const LoadingExample = () =>{

    const [gender, setGender] = useState(null);
    const [name, setName] = useState("")
    const [er,seter] = useState(null)
    const [isloading, setloading] = useState(false)

    useEffect(()=>{
        setloading(true);
        fetch(`https://api.genderize.io?name=${name}`).then((res)=>{
            return res.json()
        }).then((userGender)=>{
            setTimeout(()=>{
                setGender(userGender.gender)
            },1000)
            
        }).catch((error)=>{
            seter(error)
            console.log(error)
        }).finally(()=>{
            setloading(false)
        })
    },[name])

    return(
        <div>
            <input onChange={(event)=>{setName(event.target.value)}}/>
            {isloading && <img src={loader} alt="loader"></img>}
            {gender && <div>Gender: {gender}</div>}
            {er && <div>{er}</div>}
        </div>
    )
};

export default LoadingExample