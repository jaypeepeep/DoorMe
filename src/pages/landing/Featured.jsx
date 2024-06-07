import React from 'react'
import StrongBorderButton from '../../components/buttons/StrongBorderButton.jsx'
import PropertiesCards from '../../components/cards/PropertiesCards.jsx';

const Featured = () => {
    const properties = [
        {image: 'https://via.placeholder.com/300x200.png?text=Condo', address: 'Condo', price: '₹4,000', paymentType:"monthly"},
    ];
    return (
        <div className="bg-white py-8">
            <div className="w-full pt-20 pb-10 flex flex-col gap-7 justify-center items-center ">
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className="font-montserrat text-center text-4xl font-semibold">
                        Featured Properties
                    </h1>
                    <p className="font-montserrat text-center text-xl leading-[32px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <div className="flex gap-4 justify-center mb-2">
                <StrongBorderButton>All Properties</StrongBorderButton>
                <StrongBorderButton>Condo</StrongBorderButton>
                <StrongBorderButton>Apartments</StrongBorderButton>
                <StrongBorderButton>Studio</StrongBorderButton>
            </div>
            <div className="text-center mt-8">
                <button className="bg-white text-[#1A1A1A] font-bold px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
                    See All Listings
                </button>
            </div>
        </div>
    )
}

export default Featured
