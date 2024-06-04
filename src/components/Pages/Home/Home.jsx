import React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import backgroundImage from '../../../assets/HeroImage.png';

const Home = () => {
  const heroContent = {
    backgroundImage: backgroundImage,
  };

  return (
    <>
      <Hero backgroundImage={heroContent.backgroundImage} />
    </>
  );
};

export default Home;