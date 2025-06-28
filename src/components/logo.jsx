import React from 'react'
const logo = ({ width = '70px' }) => {
  return (
    <div className='flex items-center justify-center'>
      <img
        src="/Logo.svg"
        alt="Logo"
        className='w-full'
        style={{ width: width }}
      />
    </div>
  )
}

export default logo