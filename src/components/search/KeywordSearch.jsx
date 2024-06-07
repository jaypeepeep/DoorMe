import React from 'react';
import BorderButton from '../buttons/BorderButton';
import DarkButton from '../buttons/DarkButton';

const KeywordSearch = () => {
  return (
    <div className="w-full flex gap-4 items-center bg-white rounded-full px-10 py-3">
        <select name="type" className="bg-white w-1/5 border border-#E9E9E9 text-gray-800 font-semibold px-2 py-2 rounded-full outline-none">
                <option>Type</option>
                <option>Type</option>
                <option>Type</option>
        </select>
        <input type="text" placeholder="Enter Keyword" className="placeholder:text-gray-800 w-1/2 bg-white border border-#E9E9E9 rounded-full text-gray-800 font-semibold px-4 py-2 flex-grow  outline-none"/>
        <BorderButton>Filters</BorderButton>
        <DarkButton>Search</DarkButton>
    </div>
  );
};

export default KeywordSearch;