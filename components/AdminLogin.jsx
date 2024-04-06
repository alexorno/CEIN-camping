"use client"
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';


const AdminLogin = () => {
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    fetch('api/isAdmin')
    .then((res) => res.json())
    .then((answer) => {
        setAuth(answer)
      })
  }, [auth])


  const setAuthTrue = () => {
    setAuth(true)
  };

  const setAuthFalse = () => {
    setAuth(false)
  };


  if(!auth){
    return (<LoginPage setAuthTrue={setAuthTrue}/>)
  }else{
    return (<Dashboard setAuthFalse={setAuthFalse}/>)
  }
}

const LoginPage = ({setAuthTrue}) => {
  const [formValues, setFormValues] = useState({})
  const [responseMessage, setResponseMessage] = useState({})
  

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    setFormValues(formObject)
  }

  useEffect(() => {
    fetch('/api/adminLogin', {
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseMessage(data)
        if(data.status == 200){
          setAuthTrue();
        }
      })
  }, [formValues])

  return (
    <form className='admin-login' onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type='text' id='username' name='username'/>
        <label htmlFor="password">Password:</label>
        <input type='text' id='password' name='password'/>
        <input type='submit' value="Submit"/>
        <p>{responseMessage.message}</p>
    </form>
  )
}




export default AdminLogin