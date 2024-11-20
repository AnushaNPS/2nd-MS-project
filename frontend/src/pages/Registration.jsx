import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  const RegisterUser = async (e) => {
    e.preventDefault()

    // check if password match before sending to the backend
    if (password !== confirmPassword) {
      alert('Password do not match')
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/user/', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      })
      console.log(response)
      alert('Registered Successfully!!')
      navigate('/login')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)//shows the error message from the backend
      }
      else {
        alert('Failed to register')
      }
    }
  }
  return (
    <div>
      <h1>Registration-form</h1>
      <form>
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" placeholder="Enter the first name" onChange={(e) => setFirstName(e.target.value)} /><br /><br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" placeholder="Enter the last name" onChange={(e) => setLastName(e.target.value)} /><br /><br />
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" placeholder="Enter the email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <label htmlFor="cnfpassword">Confirm-Password:</label>
        <input type="password" name="cnfpassword" placeholder="Enter the confirm password" onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
        <button onClick={RegisterUser}>Submit</button>
      </form>
    </div>
  )
}

export default Registration
