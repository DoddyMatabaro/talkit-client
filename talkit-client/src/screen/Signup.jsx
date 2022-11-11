import React from 'react'
import { Link } from "react-router-dom";
import hero from '../assets/images/img3.jpg';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("submit")
      if(password !== confirmPassword){
        return toast.error('Password do not match');
      }else{
        const url='http://localhost:9000/api/v1/signup';
        const options = {
          method: 'POST',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': ''
            },
          body: JSON.stringify({
            username: username, 
            password: password
          })
        };
        const response = await fetch(url, options);
        const result = await response.json();

        // const resolveWithSomeData = new Promise(resolve => fetch(url, options)=> resolve("world"), 3000));
          toast.promise(
              result,
              {
                pending: {
                  render(){
                    return "I'm loading"
                  },
                  // icon: false,
                },
                success: {
                  render({data}){
                    return `Hello ${data}`
                  },
                  // // other options
                  // icon: "🟢",
                },
                error: {
                  render({data}){
                    // When the promise reject, data will contains the error
                    return <MyErrorComponent message={data} />
                  }
                }
              }
          )
          // resolveWithSomeData();
        // fetch(url,options)
        //   .then(response=>response.json())
        //   .then(result =>{
        //     console.log(result);
        //   })
        //   .catch(err=>console.log(err));
      }
  }

  return (
    <div className='m-0 p-0 flex flex-row gap-0 w-screen h-screen'>
        <ToastContainer/>
        <section className='w-[65%] sm:hidden md:block'>
            <img src={hero} alt='hero' 
                className='h-full w-full object-fit' />
        </section>
        <section className='w-[35%] flex flex-col justify-center gap-6 p-10 align-middle'>
            <div className='h-1 bg-black w-[40%] self-center'></div>
          <h1 className='text-center  text-3xl'>Create an account</h1>
          <h5 className='text-center text-gray-400 mb-6'>Let's go and talk. La famille d'abord</h5>
            <form method='post' onSubmit={handleFormSubmit} className="flex flex-col gap-8 px-4">
                <input 
                    placeholder='Username' 
                    type='text' 
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    className=' border-b-2 py-2 px-1 rounded-none '
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
                    className=' border-b-2 py-2 px-1 rounded-none'
                  />

                <input 
                    placeholder='Confirm Password' 
                    name="confirmPassword"
                    autoComplete='current-password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type='password' 
                    required 
                    className=' border-b-2 py-2 px-1 rounded-none'
                  />
                <button 
                    
                    type='submit' 
                    className='text-white bg-black p-2 mb-5 rounded-md'
                >Sign Up</button>
                <p className='text-gray-400 text-center '>Already have a account? 
                    {/* <Link 
                        to="/login" 
                        className='text-black'
                    >
                        Login
                    </Link> */}
                </p>
            </form>
            <div className='h-1 bg-black w-[40%] self-center'></div>

        </section>
    </div>
  )
}

export default Signup