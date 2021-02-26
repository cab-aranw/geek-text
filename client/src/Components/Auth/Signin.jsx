import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios'

export const Signin = ()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleChange = (e)=>{
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value)
      default:
        break;
    }
  }

  const SignInUser = (e)=>{
    e.preventDefault();

    const form_data = new FormData();
    form_data.append('email', email);
    form_data.append('password', password);

    const url = "http://localhost:5000/api/signin"

    axios.post(url, form_data).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err.response);
    })

  }

  return (
    <div>
      <form className="auth-form">
        <h3 className="auth-form-header">Sign In</h3>
        <label>Email</label>
        <input value={email} id="email" onChange={handleChange} type="email" placeholder="Email"/>
        <label>Password</label>
        <input value={password} id="password" onChange={handleChange} type="password" placeholder="Password"/>
        <button onClick={SignInUser}>SignIn</button>
      </form>
    </div>
  )
}
