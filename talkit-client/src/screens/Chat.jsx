import React, { useState } from 'react'
import profile from '../assets/images/profile.jpg';
import { FaBeer,  FaMicrophone } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { GlobalContext } from '../utils/context'
import { reducerCases } from '../utils/Constants';
import Header from '../components/Header';
import CurrentUser from '../components/CurrentUser';
import SearchUser from '../components/SearchUser';
import User from '../components/User';
import TopChat from '../components/TopChat';
import Message from '../components/Message';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import { sendRoute, usersRoute } from '../utils/routesAPI';
import { toast, ToastContainer } from 'react-toastify';
import { allUsers, getAllMessages, getConversation, getUser, sendMessage, toastOptions } from '../utils/accessory';
import { Vortex } from 'react-loader-spinner';

function Chat() {
    const[{ loader,users,selected_user, current_user, token}, dispatch] = GlobalContext();
    const navigate = useNavigate();
    const [text, setText] = useState("");
    useEffect(() => {
        if(current_user !== null ) {
            allUsers(current_user._id, dispatch);
        }
      }, []);

      useEffect(()=>{
        getConversation("63720b458d818269b4dbe268", "63720b6a8d818269b4dbe26d" , dispatch);
      },[selected_user])   
      const usersClasses = `border-b border-gray-200 xl:border-b-0 xl:flex-shink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50 ${selected_user !== null? "hidden" : "block"}`
      const chatClasses = `flex-1 p:2 sm:pb-6 justify-between  flex-col h-screen  xl:flex ${selected_user !== null? "flex" : "hidden"}`
      console.log(users);
return (
    <div>
        { token !== null || current_user !==null ? (
        <div>
            <div className='relative min-h-screen flex flex-col bg-gray-50'>
                {/* nav */}
                <Header/>
                {/* end navigation ends here */}
                {/* CHAT LAYOUT */}
                <div className='flex-grow w-full max-w-7xl mx-auto lg:flex'>
                    <div className="flex-1 min-w-0 bg-white xl:flex">
                        <div className={usersClasses}>
                            <div className='h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                                <div className='h-full relative '>
                                    <CurrentUser/>
                                    <div className='mb-4 flex flex-col gap-4'>
                                        {/* search box end */}
                                        <SearchUser/>
                                            <User/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT */}
                        
                        <div className={chatClasses}>
                                <TopChat/>
                                {/* messages */}
                                <div id='messages' className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                   {/* first message */}
                                   <Message/>
                                    {/* second message */}
                                    <div className='chat-message'>
                                        <div className='flex items-end justify-end'>
                                            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-end'>
                                                <div>
                                                    <span className='px-4 py-2 rounded-lg inline-block rounded-bl-none bg-red-500 text-white'>   
                                                            🔶 lorem ipsum 2
                                                    </span>
                                                </div>
                                            </div>
                                            <img 
                                                className='h-6 w-6 rounded-full order-1'
                                                src={profile}
                                            />
                                        </div>
                                    </div>
                                    {/* first */}
                                    <div className='chat-message'>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                                                <div>
                                                    <span className='px-4 py-2 rounded-lg rounded-bl-none bg-gray-200 text-gray-600'>
                                                            🔶 lorem ipsum 
                                                    </span>
                                                </div>
                                            </div>
                                            <img 
                                                className='h-6 w-6 rounded-full order-1'
                                                src={profile}
                                            />
                                        </div>
                                    </div>

                                    {/* first */}
                                    <div className='chat-message'>
                                        <div className='flex items-center'>
                                            <div className='flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start'>
                                                <div>
                                                    <span className='px-4 py-2 rounded-lg rounded-bl-none bg-gray-200 text-gray-600'>
                                                            🔶 lorem ipsum 
                                                    </span>
                                                </div>
                                            </div>
                                            <img 
                                                className='h-6 w-6 rounded-full order-1'
                                                src={profile}
                                            />
                                        </div>
                                    </div>
                                 </div>
                                 {/* messages box end */}

                                 <div className="border-t-2 border-gray-200 px-4 pt-4  mb-16">
                                    <div className="relative flex">
                                            <span className="absolute inset-y-0 flex items-center">
                                                <button className='inline-flex items-center items-middle p-5 rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300'>
                                                    <FaMicrophone className=""/>
                                                </button>
                                            </span>
                                            <input
                                                onChange={(e)=>setText(e.target.value)}
                                                placeholder="Ecris ton message ici..." 
                                                className="focus:ring-red-500 focus:border-red-500 w-full focus:placeholder-gray-400 text-gray-600 placeholder-gray-300 pl-12 bg-gray-100 rounded-full py-3 border-gray-200"/> 
                                            
                                            <span className="inset-y-0 flex items-center">
                                                <button 
                                                    onClick={(e)=>{
                                                        e.preventDefault();

                                                        sendMessage(current_user._id, selected_user._id, text);
                                                    }}
                                                    className='inline-flex items-center items-middle p-5 rounded-full h-14 w-14 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300'>
                                                    <BiSend />
                                                </button>
                                            </span>
                                    </div>
                                </div>

                                {/* <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shink-0 lg:border-l lg:border-gray-200 xl:pr-0 hidden xl:block">
                                    <div className="h-full pl-6 py-6 lg:w-80">
                                        <div className="h-full relative">
                                            <div className="m-auto text-center mb-10">
                                                <img 
                                                    src={profile}
                                                    className="w-36 h-36 rounded-full m-auto"  
                                                />
                                                <h2 className="m-auto text-2xl mt-2">Ben Kinyamba </h2>
                                            </div>
                                            <div className="mb-2">
                                                <h4>Detail</h4>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                                <div>
                                                    <div className="cursor-pointer bg-gray-300 hover:bg-gray-400 h-14 w-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ):
        <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        }
    </div>
  )
}

export default Chat