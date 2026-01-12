import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [error,setError]=useState(" ")
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200'>
            <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Login</h2>
            {error && <p className='text-red-500 mb-4 text-sm'>{error}</p>}
            <form >
            <div className='mb-4'>
             <label className='block text-gray-600 text-sm font-medium mb-1'>Email</label>
             <input className='w-full p-3 border border-gray-300 rounded-md focus:ring-blue-200 outline-none focus:border-blue-400'name='email'  type="email"  placeholder='Enter Your Email' required/>
            </div>
            <div className='mb-6'>
             <label className='block text-gray-600 text-sm font-medium mb-1'>Password</label>
             <input className='w-full p-3 border border-gray-300 rounded-md focus:ring-blue-200 outline-none focus:border-blue-400' type="password" placeholder='Enter Your Password' required/>
             </div>
             <button className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 font-medium cursor-pointer'>Login</button>

        </form>
        </div>
    </div>
  )
}

export default Login