import React from 'react';
import './Landing.css';
import Hero from '../../components/hero/Hero'
import FindDorms from './FindDorms'
import WorkWithUs from './WorkWithUs';
import backgroundImage from '../../assets/HeroImage.png';
import SignInCard from '../../components/cards/SignInCard';
import Featured from './Featured';

const Landing = () => {
  const heroContent = {
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero backgroundImage={heroContent.backgroundImage}/>
      <FindDorms/>
      <WorkWithUs/>
      <SignInCard/>
      <Featured/>
    </>
  );
};

export default Landing;