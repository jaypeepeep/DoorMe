import React from 'react';
import BorderButton from '../buttons/BorderButton';
import DarkButton from '../buttons/DarkButton';

const KeywordSearch = () => {
  return (
    <div className="flex items-center bg-white rounded-full px-4 py-2">
        <select name="type" className="bg-white text-gray-800 font-semibold px-2 py-1 mr-2 rounded-md outline-none">
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
        </select>
        <input type="text" placeholder="Enter Keyword" className="bg-white text-gray-800 font-semibold px-2 py-1 mr-2 flex-grow rounded-md outline-none"/>
        <BorderButton/>
        <DarkButton/>
    </div>
  );
};

export default KeywordSearch;