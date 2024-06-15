import React from 'react'

const BlackButton = ({children}) => {
  return (
    <div>
        <button type="button" className="bg-[#1A1A1A] text-white text-base font-medium px-10 py-2 rounded-full hover:bg-indigo-700 transition duration-300 ${className}">
            {children}
        </button>
    </div>
  )
}

export default BlackButton
