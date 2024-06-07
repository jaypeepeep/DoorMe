import React from 'react';
import KeywordSearch from '../search/KeywordSearch'
import BorderButton from '../buttons/BorderButton';

const Hero = ({ backgroundImage }) => {
    return (
        <div className="w-full min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-3/5 mx-auto text-white flex flex-col gap-5 justify-center items-center min-h-screen text-wrap ">
                <h1 className="font-montserrat text-6xl font-semibold leading-[78px] text-center">Discover a dorm you'll love to live</h1>
                <KeywordSearch/>
            </div>
        </div>
    );
};

export default Hero;