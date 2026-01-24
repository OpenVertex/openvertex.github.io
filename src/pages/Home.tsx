import React from 'react';
import Hero from '../components/Hero';
import MatrixBackground from '../components/MatrixBackground';
import TeamSection from '../components/TeamSection';

const Home: React.FC = () => {
  return (
    <>
      <MatrixBackground />
      <Hero />
      <TeamSection />
    </>
  );
};

export default Home;
