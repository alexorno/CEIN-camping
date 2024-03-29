"use client"
import React, { useEffect, useState } from 'react';

const AdminLogin = () => {
  const [formValues, setFormValues] = useState({})
  const [responseMessage, setResponseMessage] = useState('')
  const [auth, setAuth] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    setFormValues(formObject)
  }

  useEffect( () => {
    fetch('/api/adminLogin', {
      method: "POST",
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseMessage(data)
      })

  }, [formValues])

  useEffect(() => {
    fetch('api/isAdmin')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setResponseMessage(`${data}`)
      })
  }, [])

  return (
    <form className='admin-login' onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type='text' id='username' name='username'/>
        <label htmlFor="password">Password:</label>
        <input type='text' id='password' name='password'/>
        <input type='submit' value="Submit"/>
        <p>{responseMessage}</p>
    </form>
  )
}

export default AdminLogin