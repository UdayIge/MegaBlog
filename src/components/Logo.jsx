const Logo = ({ width = '70px' }) => {
  return (
    <div className='flex items-center justify-center'>
      <img
        src="/Logo.svg"
        alt="Logo"
        style={{ width: width }}
      />
    </div>
  )
}

export default Logo;
