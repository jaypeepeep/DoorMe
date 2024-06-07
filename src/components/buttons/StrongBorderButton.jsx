import React from 'react';

const StrongBorderButton = ({children}) => {
  return (
    <button className="px-4 py-2 rounded-full border border-black text-black bg-white" type="button">
        {children}
    </button>
  );
};

export default StrongBorderButton;