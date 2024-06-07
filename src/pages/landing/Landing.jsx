import React from 'react';
import './Landing.css';
import Hero from '../../components/hero/Hero'
import FindDorms from './FindDorms'
import WorkWithUs from './WorkWithUs';
import backgroundImage from '../../assets/HeroImage.png';

const Landing = () => {
  const heroContent = {
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero backgroundImage={heroContent.backgroundImage}/>
      <FindDorms/>
      <WorkWithUs/>
    </>
  );
};

export default Landing;