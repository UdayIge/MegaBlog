import React from 'react'

const Select = ({
  options = [],
  label = "",
  className = "",
  ...props
}, ref) => {
  const id = React.useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{label}</label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-700 dark:focus:border-blue-700 ${className}`}
      >

        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select);   