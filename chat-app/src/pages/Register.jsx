import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import { registerRoute } from '../utils/ApiRoutes';



function Register() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(handleValidation()){
      const {username, email, password, confirmPassword} = values;
         const {data} = await axios.post(registerRoute,{username, email, password})
        
        if(data.status === false){
          toast.error(data.msg, toasOptions)
        }
        if(data.status === true){
          localStorage.setItem("chat-app-user", JSON.stringify(data.user))
          navigate("/")
        }
    }
  }
    const toasOptions = {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme:"dark"
    }
    const handleValidation = ()=>{
      const {username, email, password, confirmPassword} = values;
       if(password !== confirmPassword){
         
        toast.error("password and confirm password should be same", toasOptions)
        return false;
       }else if(username.length < 3){
        toast.error("Invalid username", toasOptions)
        return false;
       }else if(email === ""){
        toast.error("Email must required", toasOptions)
        return false;
       }
       return true;
    }
    const handleChange = (e)=>{
     setValues({...values, [e.target.name]:e.target.value}) 
    }
    
  return (
    <>
     <FormContainer>
         <form onSubmit={(e)=> handleSubmit(e)}>
             <div className="brand">
                 <img src={Logo} alt="Logo" />
                 <h1>Snappy</h1>
            </div>
                 <input type="text" placeholder='Username' name='username' onChange={(e)=>handleChange(e)}/>
                 <input type="email" placeholder='Email' name='email' onChange={(e)=>handleChange(e)}/>
                 <input type="password" placeholder='Password' name='password' onChange={(e)=>handleChange(e)}/>
                 <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={(e)=>handleChange(e)}/>
                 <button type='submit'>Create User</button>
                 <span>Already have an account ? <Link to="/login">login</Link></span>
         </form>
     </FormContainer>
     <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid white;
      outline: none;
    }
  }
  button {
    background-color: #a18dd8;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
export default Register
