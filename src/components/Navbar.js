import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from "../assets/logo-koding-akademi.jpg"
import Dropdown from './Dropdown'

const Navbar = () => {
  const [openDrowdown, setOpenDropdown] = useState(false);


  return (
    <div>
        <nav className='bg-[#4254f8] '>
          <div className='flex px-10 '>
            <img src={Logo} alt="" height={200} width={200}/>
            <ul className='flex items-center w-full px-10 text-gray-300 '>
              <li className='px-3 hover:text-gray-500'>
                <Link to="/">Home</Link>
              </li>
              <li className='px-3 hover:text-gray-500'> 
                <Link to="/message">Messsage</Link>
              </li>
              <li className='px-3 hover:text-gray-500'>
                <Link to="/task">Task</Link>
              </li>
              <li className='px-3 cursor-pointer' onClick={() => setOpenDropdown((prev)=>!prev)}>
                Dropdown
                {openDrowdown && 
                  <Dropdown/>
                }
                
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar