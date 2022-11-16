import React from 'react'
import profile from '../assets/images/profile.jpg';

const Message = () => {

  return (
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
  )
}

export default Message