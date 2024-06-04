import React from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero'
import backgroundImage from '../../assets/HeroImage.png';

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