import { useState, useEffect } from "react"

const UserSideEffect = ()=>{
    const [userData, setUserdata] = useState([])
    useEffect(()=>{
        fetch("https://randomuser.me/api/").then((res)=>{
        return res.json()
    }).then((userList)=>{
        console.log(userList,"random user api")
        setUserdata(userList.results)
    }).catch((error)=>{
        console.log(error)
    })
    },[])
   
    return(
        <div>
            {userData.map((user,i)=>{
                return (
                <div key={i}>
                    <img src={user.picture.medium} alt="random user"></img>
                    <div>{`${user.name.first} ${user.name.last}`}</div>
                    <div>{user.gender}</div>
                    <div>{user.email}</div>
                </div>)
            })}
        </div>
    )
}
export default UserSideEffect;