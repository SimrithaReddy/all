import { useState } from "react";

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const handleLogin = () => {
        const users = [{ "name": "shubham", "email": "shubham@gmail.com", "password": "Abc@123" }, { "name": "shubham1", "email": "shubham1@gmail.com", "password": "Abc@123d" },
        { "name": "shubham2", "email": "shubham1@gmail.com", "password": "Abc@123d" }]
        users.map((user) => {
            if (user.email === loginForm.email) {
                if (user.password === loginForm.password) {
                    console.log("Yes")
                } else {
                    console.log("Invalid password")
                }
            } else {
                console.log("user not exist")
            }
        })
    }
    return (
        <>
            <div>Login Form</div>
            <section>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" onChange={(e) => { setLoginForm({ ...loginForm, email: e.target.value }) }}></input>
            </section>
            <section>
                <label htmlFor="password">Password:</label>
                <input type="Password" id="password" onChange={(e) => { setLoginForm({ ...loginForm, password: e.target.value }) }}></input>
            </section>
            <button onClick={handleLogin}>Submit</button>
        </>
    )
}
export default LoginForm;