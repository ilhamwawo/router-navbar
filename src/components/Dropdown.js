import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <>
       <ul className='absolute bg-white text-black top-14 rounded-sm py-1 px-3 ml-[-20px] border Dropdownadv '>
        <li className='hover:text-gray-500 py-1'>
            <Link>Action</Link>
        </li>
        <li className='hover:text-gray-500 py-1'>
            <Link>Another section</Link>
        </li>
        <li className='hover:text-gray-500 py-1'>
            <Link>Something</Link>
        </li>
        <hr />
        <li className='hover:text-gray-500 py-1' >
            <Link>Separated Link</Link>
        </li>
        </ul> 
    </>
  )
}

export default Dropdown