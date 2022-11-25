import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GlobalContext } from '../utils/context'
import Select from "react-select";

const SearchUser = () => {

  const [{users}, dispatch] = GlobalContext(); 
  const options = users?.map((user)=>{
        return{
          value: user,
          label: user.username,
        }
  })
  
  const [search, setSearch] = useState('');
  const handleSelect = (data)=> {
     setSearch(data);
  }
  return (
    <div className="relative">
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <FaSearch/>
        </div>
            {/* <input 
                placeholder='Search'
                name="search"
                className='focus:ring-red-500 focus:border-rerder-red-500 block w-full pl-10 sm:text-sm border-gray-100 rounded-full p-2 border'
            /> */}
            <Select
              options={options}
              placeholder="Selectionner un utilisateur"
              value={search}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
    </div>
  )
}

export default SearchUser