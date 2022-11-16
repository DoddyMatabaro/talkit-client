import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchUser = () => {
  return (
    <div className="relative">
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch/>
            <input 
                placeholder='Search'
                name="search"
                className='focus:ring-red-500 focus:border-rerder-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border'
            />
        </div>
    </div>
  )
}

export default SearchUser