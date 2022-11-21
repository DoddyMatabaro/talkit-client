import React from 'react'
import { Link } from "react-router-dom";
import hero from '../assets/images/img3.jpg';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';


function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submit")
      if(password !== confirmPassword){
        return toast.error('Password do not match');
      }else{
        const url='http://localhost:9000/api/auth/signup';
        const options = {
          method: 'POST',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          body: JSON.stringify({
            username: username, 
            password: password
          })
        };
        
        fetch(url,options)
          .then(response=>response.json())
          .then(result =>{
            if(!result){
              toast.error(result.message, toastOptions);
            }else{
              toast.done(result.message, toastOptions);
            }
            console.log(result);
          })
          .catch(err=>toast.error(err, toastOptions));
      }
  }

  return (
    <div className='m-0 p-0 flex flex-row gap-0 w-screen h-screen align-middle justify-center '>
        <ToastContainer/>
        <section className='sm:max-w-full max-w-4/5 flex flex-col justify-center gap-6 align-middle'>
            <div className='h-1 bg-red-600 w-[40%]  self-center'></div>
          <h1 className='text-center  text-3xl font-bold text-red-600'>Create an account</h1>
          <h5 className='text-center text-gray-400 mb-6 truncate'>Let's go and talk. La famille d'abord</h5>
            <form method='post' onSubmit={handleFormSubmit} className="flex flex-col gap-8 px-10 align-middle w-full">
                <input 
                    placeholder='Username' 
                    type='text' 
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    className=' border-b-2 py-2 px-1 focus:outline-none focus:border-none '
                    id='username'
                    name="username" 
                  />
                <input 
                    placeholder='Password' 
                    name="password"
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                    type='password' 
                    required 
                    className=' border-b-2 py-2 px-1 rounded-none focus:outline-none focus:border-none'
                  />

                <input 
                    placeholder='Confirm Password' 
                    name="confirmPassword"
                    autoComplete='current-password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type='password' 
                    required 
                    className=' border-b-2 py-2 px-1 focus:outline-none focus:border-none rounded-none'
                  />
                <button 
                    
                    type='submit' 
                    className='text-white bg-red-600 font-bold p-2 mb-5 rounded-md'
                >Sign Up</button>
                <p className='text-gray-400 text-center '>Already have a account? 
                    <Link 
                        to="/login" 
                        className='text-red-600 font-bold'
                    >
                        Login
                    </Link>
                </p>
            </form>
            <div className='h-1 bg-red-600 w-[40%] self-center'></div>

        </section>
    </div>
  )
}

export default Signup