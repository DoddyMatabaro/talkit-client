import React,{useState, useEffect} from 'react'
import hero from '../assets/images/hero.jpg';
import { ToastContainer, toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { signinRoute } from '../utils/routesAPI';

function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState[{
      username: "",
      password: ""
    }]

    const toastOptions = {
      position: 'bottom-right',
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    };

    useEffect(() => {
      if(localStorage.getItem('user')) {
        navigate('/');
      }
    }, );
    
    const formValidation = () =>{
      const {password, username} = values;
      if(password ===  ""){
        toast.error("Password required!", toastOptions);
        return false;
      } else if(username.length === ""){
        toast.error("Username required", toastOptions);
        return false;
      } 
      return true;
      }


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