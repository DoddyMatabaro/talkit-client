import React from 'react'
import Skeleton from 'react-loading-skeleton';
import profile from '../assets/images/profile.jpg';
import { GlobalContext } from '../utils/context';
import LastMessage from './LastMessage';
import { group } from 'core-js/actual/array/group';
import { reducerCases } from '../utils/Constants';
// import { group } from 'core-js/actual/array/group-by-to-map';

const User = () => {
    const [{messages, current_user, selected_user}, dispatch] = GlobalContext();
    const res = messages.group(({ sender }) => sender);

    // const changeSelected_user = (e, id)=>{
    //     e.preventDefault(); 
        
    //     dispatch({type:  reducerCases.SET_SELECTED_USER, value: })
    // };
    
    console.log(selected_user);
    return (
             messages.map(message=>{
                return(
              <div className='relative rounded-lg px-2 py-2 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 mb-3 hover:bg-gray-200'>
                        
                    <div className='flex-shink-8'>
                        <img 
                            className='h-10 w-10 rounded-full'
                            src={profile}
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <a href='#' className="focus:outline-none" onClick={(e)=>{
                            e.preventDefault();
                            dispatch({type: reducerCases.SET_SELECTED_USER, value:message.sender });
                        }}>
                            <div className="flex items-center justify-between">
                                <p className='text-sm font-bold text-red-600'>
                                    {message.sender}
                                </p>
                                <div className='text-gray-400 text-xs'>
                                    12:35 AM
                                </div>
                            </div>
                            <LastMessage/>
                        </a>
                    </div>
                </div>
            )
        })
    )
}

export default User