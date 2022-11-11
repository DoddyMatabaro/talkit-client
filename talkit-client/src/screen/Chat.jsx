import React from 'react'
import profile from '../assets/images/profile.jpg';

function Chat() {
  return (
    <div>
        <div>
            <div className='relative min-h-screen flex flex-col bg-gray-50'>
                <nav className='flex-shink-a bg-red-600'>
                        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
                                <div className='relative flex items-center justify-between h-16'>
                                    <div></div>
                                    <div className='flex lg:hidden'>
                                        <button className='bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offser-2 focus:ring-offset-red-600 focus:ring-white'></button>
                                    </div>
                                    <div className='hidden lg:block lg:w-8'>
                                        <div className='flex items-center justify-end'>
                                            <div className='flex'>
                                                <a href='#' className='px-3 py-2 rounded-md text-sm font-medium text-white hover:text-white'>
                                                    Chat
                                                </a>
                                            </div>
                                            <div className='ml-4 relatice flex-shink-0'>
                                                <div>
                                                    <button
                                                        className='bg-red-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset focus:ring-offset-red-700 focus:ring-white'>
                                                            <img 
                                                                className='h-8 w-8 rounded-full'
                                                                src={profile}
                                                                alt="profile"
                                                            />
                                                        </button>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </nav>
                {/* end navigation ends here */}
                <div className='flex-grow w-full max-w-7xl mx-auto lg:flex'>
                    <div className="flex-1 min-w-0 bg-white xl:flex">
                        <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-gray-50">
                            <div className='h-full pl-4 pr-2 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                                <div className='h-full relative'>
                                    <div className='relative rounded-lg px-3 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2'>
                                        <div className='flex-shink-0'>
                                            <img 
                                                src={profile}
                                                className='h-12 w-12 object-cover rounded-full'
                                            />
                                        </div>
                                        <div className='flex-1 min-w-0'>
                                            <a href='#' className='focus:outline-none'>
                                                <span className="absolute inset-0"/>
                                                <p className='text-sm font-bold text-red-600'>Benjamin Kinyamba</p>
                                                <p className='text-sm  text-gray-500 truncate'>Web Develop</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat