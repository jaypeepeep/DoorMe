import React from 'react';

const ClearButtonSmall = ({ children }) => {
  return (
    <div>
      <button className="px-4 py-1 rounded-l text-gray-800 bg-transparent font-montserrat font-semibold hover:text-[#651FFF] text-base leading-tight text-left"type="button">
        {children}
      </button>
    </div>
  );
};

export default ClearButtonSmall;