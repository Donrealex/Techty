import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutFounder from '../components/AboutFounder';
import Teams from '../components/Teams';

const About = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar />
      <AboutHero />
      <AboutFounder />
      <Teams />
      <Footer />
    </div>
  );
}

export default About