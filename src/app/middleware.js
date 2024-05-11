'use server'
import React from 'react'
import { cookies } from 'next/headers'

async function db(){
    console.log('asddal')
    const cookieStore = cookies()
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ))
}

const middleware = async() => {
    async function db(){
        console.log('asddal')
        const cookieStore = cookies()
      return cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
        </div>
      ))
    }
  return (
    <div>middleware</div>
  )
}

export default db