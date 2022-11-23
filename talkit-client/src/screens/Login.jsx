import React,{useState, useEffect} from 'react'
import hero from '../assets/images/hero.jpg';
import { ToastContainer, toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { signinRoute } from '../utils/routesAPI';
import { GlobalContext } from '../utils/context'
import { reducerCases } from '../utils/Constants';
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from '../utils/accessory';

const Login = () =>  {
    const navigate = useNavigate();
    const[{ loading, current_user}, dispatch] = GlobalContext();
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [processing, setProcessing] = useState(true);

   
    const formValidation = () =>{
      if(password.trim() ===  ""){
        toast.error("Password required!", toastOptions);
        return false;
      } else if(username.trim() === ""){
        toast.error("Username required", toastOptions);
        return false;
      } 
      return true;
      }
            
    const handleSubmit  =  (e)=>{
      e.preventDefault();
      
      if( formValidation()){

            fetch(signinRoute,{
              method: 'POST',
              body: JSON.stringify({
                username:username,
                password:password
            }),
              headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(response=>response.json())
            .then(result =>{
              if(result.success === false){
                toast.error(result.message, toastOptions);
              } else {
                localStorage.setItem('user', JSON.stringify(result.user));
                localStorage.setItem('token', JSON.stringify(result.token));
                toast.success(result.message, toastOptions);
                navigate("/");
              }
            })
            .catch(err=>toast.error(err, toastOptions));
        }
    }
  return (
    <div className='m-0 p-0 flex flex-row gap-0 w-screen h-screen justify-center bg-gray-200'>
        <section className='w-[25%] sm:w-full  flex flex-col justify-center gap-6 p-10 align-middle'>
          <h1 className='text-center  text-3xl font-bold text-red-600'>Sign In</h1>
          <h5 className='text-center text-gray-400 mb-6 truncate'>Get a nother tour to talk with freinds</h5>
            <form method='post' className="flex flex-col gap-8" onSubmit={handleSubmit}>
                <input placeholder='Username' type='text' onChange={(e)=>setUsername(e.target.value)} required className=' border-b-2 py-3 px-4 rounded-md focus:outline-none focus:border-none '/>
                <input placeholder='Password' type='password' required onChange={(e)=>setPassword(e.target.value)} className='border-b-2 py-3 px-4 rounded-md focus:outline-none focus:border-none'/>
                <button type='submit' className='text-white font-bold bg-red-500 p-3 mb-5 rounded-md '>
                      Login
                </button>
                <p className='text-gray-400 text-center '>Haven't a account? <Link href='/signup' className='text-red-500 font-bold '>Sign Up</Link></p>
            </form>
        </section>
        <ToastContainer/>
    </div>
  )
}

export default Login