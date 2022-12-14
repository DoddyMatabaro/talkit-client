import React from 'react'
import { GlobalContext } from '../utils/context'

const LastMessage = () => {

  const [{messages}, dispatch] = GlobalContext();
  
  return (
    <div className="flex items-center justify-between">
        <p className='text-sm text-gray-500 truncate'>Hi</p>
        <div className='text-white text-xs bg-red-400 rounded-full px-1 py-0'>
            2
        </div>
    </div>
  )
}

export default LastMessage