import React from 'react'

const BackgroudWrapper = ({ children }) => {
  return (
    <div className='h-full w-full bg-[rgba(0,_0,_0,_0.3)] absolute top-[0] justify-center items-center flex'>
        {children}
    </div>
  )
}

export default BackgroudWrapper;