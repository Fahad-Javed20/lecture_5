import React from 'react'

export const LoginForm = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='bg-green-500 h-130 w-110 flex justify-center items-center'>
        <div className='bg-green-700 h-120 w-100 rounded-2xl'>
             <form action="">
        <h1 className='text-amber-100 mt-10 ml-40'>Login Form</h1>

        <section className='bg-amber-100 h-100 w-100 p-10 ' >
    <label htmlFor="username">Username:</label>
    <input className='border' type="text" name="username" id="username" />

    <label className='space-x-5' htmlFor="password">Password:</label>
    <input className='border' type="password" name="password" id="password" />

    <div className='text-2xl text-white bg-green-500 inline-block rounded [-6px] p-1'><button>Submit</button></div>
        </section>
        </form>
        </div>
   
    
    </div>
</div>
  )
}
