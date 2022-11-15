import React from 'react'
import profile from '../assets/images/profile.jpg';
import { FaBeer, FaHeart, FaMicrophone, FaSearch } from 'react-icons/fa';

const TopChat = () => {
  return (
        <div className='flex sm:items-center justify-between py-3 border-b border-gray-200 p-3'>
                <div className='flex items-center space-x-4'>
                    <img 
                        src={profile}
                        className='w-10 sm:w-12 h-10 sm:h-12 rounded-full cursor pointer'
                    />

                    <div className='flex flex-col loading-tight'>
                        <div className='text-1xl mt-1 flex items-center'>
                            <span className='text-gray-700 mr-3'>Ben Shako</span>
                            <span className='text-green-500'>
                                <svg width={10} height={10}>
                                    <circle cx={5} cy={5} r={5} fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>
                        <FaSearch/>
                    </button>
                    <button className='inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none'>
                        <FaHeart/>
                    </button>
                </div>
    </div>
  )
}

export default TopChat