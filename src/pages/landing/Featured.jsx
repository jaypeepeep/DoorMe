import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StrongBorderButton from '../../components/buttons/StrongBorderButton.jsx';
import FeaturedCards from '../../components/cards/FeaturedCards.jsx';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.png';
import f6 from '../../assets/f6.png';

const Featured = () => {
  const [currentFilter, setCurrentFilter] = useState('All Properties');
  const navigate = useNavigate();

  const properties = {
    'All Properties': [
      { propertyImage: f1, propertyName: "All Property 1", address: "All address 1", price: 4000, period: "monthly" },
      { propertyImage: f2, propertyName: "All Property 2", address: "All address 2", price: 3000, period: "monthly" },
      { propertyImage: f3, propertyName: "All Property 3", address: "All address 3", price: 4000, period: "monthly" },
      { propertyImage: f4, propertyName: "All Property 4", address: "All address 4", price: 7500, period: "monthly" },
      { propertyImage: f5, propertyName: "All Property 5", address: "All address 5", price: 2000, period: "monthly" },
      { propertyImage: f6, propertyName: "All Property 6", address: "All address 6", price: 6000, period: "monthly" },
    ],
    'Dorms': [
      { propertyImage: f1, propertyName: "Dorm 1", address: "Dorm address 1", price: 2000, period: "monthly" },
      { propertyImage: f2, propertyName: "Dorm 2", address: "Dorm address 2", price: 2200, period: "monthly" },
      { propertyImage: f3, propertyName: "Dorm 3", address: "Dorm address 3", price: 2100, period: "monthly" },
      { propertyImage: f4, propertyName: "Dorm 4", address: "Dorm address 4", price: 2300, period: "monthly" },
      { propertyImage: f5, propertyName: "Dorm 5", address: "Dorm address 5", price: 2400, period: "monthly" },
      { propertyImage: f6, propertyName: "Dorm 6", address: "Dorm address 6", price: 2500, period: "monthly" },
    ],
    'Apartments': [
      { propertyImage: f1, propertyName: "Apartment 1", address: "Apt address 1", price: 5000, period: "monthly" },
      { propertyImage: f2, propertyName: "Apartment 2", address: "Apt address 2", price: 5500, period: "monthly" },
      { propertyImage: f3, propertyName: "Apartment 3", address: "Apt address 3", price: 5200, period: "monthly" },
      { propertyImage: f4, propertyName: "Apartment 4", address: "Apt address 4", price: 5300, period: "monthly" },
      { propertyImage: f5, propertyName: "Apartment 5", address: "Apt address 5", price: 5400, period: "monthly" },
      { propertyImage: f6, propertyName: "Apartment 6", address: "Apt address 6", price: 5600, period: "monthly" },
    ],
    'Condo': [
      { propertyImage: f1, propertyName: "Condo 1", address: "Condo address 1", price: 7000, period: "monthly" },
      { propertyImage: f2, propertyName: "Condo 2", address: "Condo address 2", price: 7500, period: "monthly" },
      { propertyImage: f3, propertyName: "Condo 3", address: "Condo address 3", price: 7200, period: "monthly" },
      { propertyImage: f4, propertyName: "Condo 4", address: "Condo address 4", price: 7300, period: "monthly" },
      { propertyImage: f5, propertyName: "Condo 5", address: "Condo address 5", price: 7400, period: "monthly" },
      { propertyImage: f6, propertyName: "Condo 6", address: "Condo address 6", price: 7600, period: "monthly" },
    ]
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const handleCardClick = () => {
    navigate('/login');
  };

  return (
    <div className="bg-white py-8 px-[10%]">
      <div className="w-full pt-20 pb-10 flex flex-col gap-7 justify-center items-center ">
        <div className='flex flex-col gap-1 justify-center items-center'>
          <h1 className="font-montserrat text-center text-4xl font-semibold">
            Featured Properties
          </h1>
          <p className="font-montserrat text-center text-xl leading-[32px]">
            Find the perfect housing for you.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center mb-2">
        <StrongBorderButton
          onClick={() => handleFilterChange('All Properties')}
          isActive={currentFilter === 'All Properties'}
        >
          All Properties
        </StrongBorderButton>
        <StrongBorderButton
          onClick={() => handleFilterChange('Dorms')}
          isActive={currentFilter === 'Dorms'}
        >
          Dorms
        </StrongBorderButton>
        <StrongBorderButton
          onClick={() => handleFilterChange('Apartments')}
          isActive={currentFilter === 'Apartments'}
        >
          Apartments
        </StrongBorderButton>
        <StrongBorderButton
          onClick={() => handleFilterChange('Condo')}
          isActive={currentFilter === 'Condo'}
        >
          Condo
        </StrongBorderButton>
      </div>
      <div className="text-center pt-10 pb-8 gap-10 justify-center items-center flex flex-row flex-wrap mt-8">
        {properties[currentFilter].map((property, index) => (
          <div
            onClick={handleCardClick}
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <FeaturedCards
              propertyImage={property.propertyImage}
              propertyName={property.propertyName}
              address={property.address}
              price={property.price}
              period={property.period}
            />
          </div>
        ))}
      </div>
      <div className="w-full pt-10 pb-10 flex flex-col gap-7 justify-center items-center ">
        <button className="bg-white text-[#1A1A1A] font-bold px-6 py-3 rounded-md hover:bg-purple-700 hover:text-white transition-colors">
          See All Listings
        </button>
      </div>
    </div>
  );
};

export default Featured;
