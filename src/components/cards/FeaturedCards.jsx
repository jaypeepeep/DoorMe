import React from 'react';
import locationIcon from '../../assets/locationIcon.png';
import approvalIcon from '../../assets/approvalIcon.png';

const FeaturedCards = ({ propertyImage, propertyName, address, price, period }) => {
  return (
    <div
      className="relative w-[377px] h-[377px] rounded-[16px] overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(26, 26, 26, 0.2), rgba(26, 26, 26, 1)),url(${propertyImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-[#651FFF] w-[60px] h-[42px] flex mt-8 rounded-r-[100px]'>
        <img src={approvalIcon} alt="approval" className="m-auto h-[20px] w-[20px]" />
      </div>
      <div className='flex font-montserrat mt-56 text-white flex-row justify-between items-center p-4'>
        <div className="flex flex-col justify-center items-start text-sm">
          <h4 className='font-bold text-base'>{propertyName}</h4>
          <div className='flex flex-row gap-1 items-center'>
            <img src={locationIcon} alt="location" className="w-3 h-3" />
            <p className="font-regular">{address}</p>
          </div>
        </div>
        <div className="bg-[#651FFF] px-2 w-[120px] rounded-xl text-center">
          <h5 className="font-montserrat text-[11px] leading-8 font-bold">
            &#8369;{price}<span className="font-normal"> / {period}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
