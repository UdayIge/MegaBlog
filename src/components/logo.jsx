import React from 'react'

const logo = ({width = '50px'}) => {
  return (
    <div style={{
      width:{width},
    }} 
    className='bg-pink-400 text-white text-center rounded-tr rounded-bl '>
      logo
    </div>
  )
}

export default logo