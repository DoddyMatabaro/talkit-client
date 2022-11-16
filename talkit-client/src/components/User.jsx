import React from 'react'
import Skeleton from 'react-loading-skeleton';
import profile from '../assets/images/profile.jpg';
import { GlobalContext } from '../utils/context';
import LastMessage from './LastMessage';

const User = () => {
    const [{users}, dispatch] = GlobalContext();

    return (
         
        users !== null && users !== undefined  ?
            users.map(user=>{
                <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200'>
                        
                    <div className='flex-shink-8'>
                        <img 
                            className='h-10 w-10 rounded-full'
                            src={profile}
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <a href='#' className="focus:outline-none">
                            <div className="flex items-center justify-between">
                                <p className='text-sm font-bold text-red-600'>
                                    {users[0].username}
                                </p>
                                <div className='text-gray-400 text-xs'>
                                    12:35 AM
                                </div>
                            </div>
                            <LastMessage/>
                        </a>
                    </div>
                </div>
            })
        : <div className='mt-10'>Pas d'utilisateur</div>
    )
}

export default User