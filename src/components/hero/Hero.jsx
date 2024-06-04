import React from 'react';
import './Hero.css';

const Hero = ({backgroundImage}) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className='hero container' style={heroStyle}>
        
    </div>
  );
};

export default Hero;