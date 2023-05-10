import React, {useEffect, useState} from "react";
// import '../styles/App.css';

const FormValidationASsignment8 = () => {
  const [userForm, setUserForm] = useState({username:"" , email:"", phoneNumber:"", gender:"male", password:""});
  const [formErrors,setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  const [sub, setSub] = useState(null)

  const handleChange = (e) =>{
    e.preventDefault();
    setErrors(Validate(userForm));
    setIsSubmit(true);
  }
 
  useEffect(()=>{
    console.log("these are form Errors",formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      setSub(userForm.email)
    }
  },[formErrors])

  const Validate = (userForm) =>{
    const errors = {};
    const regex_email = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regex = /^[a-zA-Z0-9\s]*$/g   
    if(userForm.username === "" || userForm.email ===  "" || userForm.phoneNumber === "" || userForm.password === ""){
      errors.main = "All fields are mandatory"          
    }else if(!regex.test(userForm.username)){
      errors.username = "Name is not alphanumeric"
    }else if(!regex_email.test(userForm.email)){
      errors.email = "Email must contain @ ."
    }else if(!userForm.gender){
      errors.gender = "Please identify as male, female or others or Prefer not Say"
    }else if (userForm.password.length<7){
      errors.password = "Password must contain atleast 6 letters"
    }
    return errors;
  }


  return (
    <div id="main">
      <h1>Registration form</h1>
      <form className="main">
        <p style={{color:'red'}}>{formErrors.main}</p>
        <section className="gap">
        <label htmlFor='name'>UserName:</label>
        <section>
        <input
        type="text" 
        data-testid = 'name'
        onChange={(event)=> {setUserForm({...userForm, username: event.target.value})}}>
        </input>
        </section>
        <p style={{color:'red'}}>{formErrors.username}</p>
        </section>

        <section className="gap">
        <label htmlFor='email'>Email:</label>
        <section>
        <input 
        type="email" 
        data-testid = 'email' 
        onChange={(event)=> {setUserForm({...userForm, email: event.target.value})}}>
        </input>
        </section>
        <p style={{color:'red'}}>{formErrors.email}</p>
        </section>

        <section className="gap">
        <label htmlFor='phoneNumber'>Phone Number:</label>
        <section>
        <input 
        type="number" 
        data-testid = 'phoneNumber' 
        onChange={(event)=> {setUserForm({...userForm, phoneNumber: event.target.value})}}>
        </input>
        </section>
        <p style={{color:'red'}}>{formErrors.phoneNumber}</p>
        </section>

        <section className="gap">
        <label htmlFor="gender">Gender:</label>
        <select 
        data-testid="gender" 
        onChange={(event)=> {setUserForm({...userForm, gender: event.target.value})}}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not Say">Prefer Not to Say</option>
        </select>
        <p style={{color:'red'}}>{formErrors.gender}</p>
        </section>

        <section className="gap">
        <label htmlFor='password'>Password:</label>
        <section>
        <input 
        type="password" 
        data-testid = 'password' 
        onChange={(event)=> {setUserForm({...userForm, password: event.target.value})}}>
        </input>
        </section>
        <p style={{color:'red'}}>{formErrors.password}</p>
        </section>

        <section className="gap">
        <input 
        type="button" 
        data-testid = 'submit'  
        value="Submit User" 
        onClick={handleChange}>
        </input>
        </section>
      </form>
      {(sub && Object.keys(formErrors).length===0  ? <div className="message">Hello {sub.split("@")[0]}</div> : <div></div>)}
    </div>
  )
}
export default FormValidationASsignment8;


