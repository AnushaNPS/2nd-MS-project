import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const LoginUser=async(e)=>{
    e.preventDefault();

    try {
      const response=await axios.post('http://localhost:5000/api/user/login',{
        email:email,
        password:password
      });
      console.log(response);
      alert('Login successful')
      navigate('/home');
    } catch (error) {
      alert('failed to login')
    }
  }

  return (
    <div>
      <h2>Login-Page</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email"  name="email" placeholder="enter a email" onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="enter a password" onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
        <button type="btn"onClick={LoginUser}>Submit</button>
      </form>
    </div>
  )
}

export default Login
