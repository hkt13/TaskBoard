import React from 'react'
import { FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <div className='p-3 mb-6 flex justify-between'>
        <div className='text-[20px] font-bold'>Task Board</div>
        <div className='text-[20px] flex items-center bg-[white] p-[8px] rounded-[50%]'><FaUser/></div>
    </div>
  )
}

export default Header;