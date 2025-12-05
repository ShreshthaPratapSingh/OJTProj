import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Light_Dark_Mode from '../assets/Light-Dark-Mode.png'
import User from '../assets/User.png'
import TransactionModel from './TransactionModel'
import { Menu } from 'lucide-react'

function Navbar({ toggleSidebar }) {

  const [openModel, setOpenModel] = useState(false)

  function logout() {
    localStorage.removeItem("token")
    window.location.href = '/'
  }
  return (
    <div className='z-50 fixed top-0 left-0 w-full'>
      {openModel && <TransactionModel close={() => setOpenModel(false)} />}
      <nav>
        <div className='w-full bg-[#111727] text-white p-2 flex items-center justify-between border-b border-y-gray-700'>
          <div className="flex items-center gap-2">
            <button className="md:hidden p-1 hover:bg-gray-700 rounded" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <img src={logo} alt="" className='w-24 md:w-32 h-auto' />
          </div>

          <div className='flex items-center gap-2'>
            <button className='bg-white text-black text-sm md:text-base rounded px-2 hover:cursor-pointer h-7 transition-all duration-200 font-semibold hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black] hidden sm:block' onClick={() => setOpenModel(true)}>+ Add Transactions</button>
            <button className='bg-white text-black text-xl md:text-base rounded px-2 hover:cursor-pointer h-7 transition-all duration-200 font-semibold hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black] sm:hidden' onClick={() => setOpenModel(true)}>+</button>

            <button className='hover:cursor-pointer'><img src={Light_Dark_Mode} alt="" className='invert w-6 md:w-8 h-auto border border-gray-300 rounded-full p-1.5' /></button>
            <button className='hover:cursor-pointer'><img src={User} alt="" className='w-6 md:w-8 h-auto' /></button>
            <button className='bg-red-500 text-white text-sm md:text-base rounded px-2 hover:cursor-pointer h-7 transition-all duration-200 font-semibold hover:-translate-y-0.5 hover:shadow-[0px_10px_10px_black]' onClick={logout}>Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
