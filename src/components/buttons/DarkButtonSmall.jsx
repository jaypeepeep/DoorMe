import React from 'react'

const DarkButtonSmall = ({children}, {className}) => {
  return (
    <div>
        <button type="button" className="bg-[#D1C4E9] text-[#651FFF] font-semibold px-4 py-1 rounded-full hover:text-white hover:bg-indigo-700 transition duration-300 ${className}">
            {children}
        </button>
    </div>
  )
}

export default DarkButtonSmall
