import React from 'react'
import hero from '../assets/images/hero.jpg';
function Login() {
  return (
    <div className='m-0 p-0 flex flex-row gap-0 w-screen h-screen'>
        <section className='w-[65%]'>
            <img src={hero} alt='hero' 
                className='h-full w-full object-fit' />
        </section>
        <section className='w-[35%] flex flex-col justify-center gap-6 p-10 align-middle'>
          <h1 className='text-center  text-3xl'>Sign In</h1>
          <h5 className='text-center text-gray-400 mb-6'>Get a nother tour to talk with freinds</h5>
            <form className='' method='post' className="flex flex-col gap-8">
                <input placeholder='Username' type='text' required className=' border-b-2 py-2 px-1 rounded-none '/>
                <input placeholder='Login' type='password' required className=' border-b-2 py-2 px-1 rounded-none'/>

                <button type='submit' className='text-white bg-black p-2 mb-5 rounded-md'>Login</button>

                <p className='text-gray-400 text-center '>Haven't a account? <a href='#' className='text-black'>Sign Up</a></p>
            </form>
        </section>
    </div>
  )
}

export default Login