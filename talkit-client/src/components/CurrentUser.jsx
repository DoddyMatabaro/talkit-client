import React from 'react'
import profile from '../assets/images/profile.jpg';
import { GlobalContext } from '../utils/context';

function CurrentUser() {
    const [{current_user}, dispatch] = GlobalContext();
  return (
             <div className='relative rounded-lg px-3 py-2 mb-6 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2'>
                    <div className='flex-shink-0'>
                        <img 
                            src={profile}
                            className='h-12 w-12 object-cover rounded-full'
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <a href='#' className='focus:outline-none'>
                            <span className="absolute inset-0"/>
                            <p className='text-sm font-bold text-red-600'>{current_user.username}</p>
                            <p className='text-sm  text-gray-500 truncate'>Web Develop</p>
                        </a>
                    </div>
            </div>
  )
}

export default CurrentUser