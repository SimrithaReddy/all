import { useState } from "react";

const RegistrationForm = ()=>{

    const [form, setForm] = useState({name: "", email: "", password: ""})
    const handleSubmit=()=>{
        console.log(form)
        let users = [];
        users .push(window.localStorage.getItem("users"));
        if(users){
            users.push(JSON.stringify(form))
            //const newUsers = [...users,JSON.stringify(form)]
            window.localStorage.setItem("users",users)
        }else{
            window.localStorage.setItem("users",[JSON.stringify(form)])
        }
    }
    return(
        <>
        <div>Registration Form</div>
        <section>
            <label htmlFor="name">UserName:</label>
            <input type="text" id="name" onChange={(e)=>{setForm({...form, name: e.target.value})}}></input>
        </section>
        <section>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={(e)=>{setForm({...form, email: e.target.value})}}></input>
        </section>
        <section>
            <label htmlFor="password">Password:</label>
            <input type="Password" id="password" onChange={(e)=>{setForm({...form, password: e.target.value})}}></input>
        </section>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default RegistrationForm;