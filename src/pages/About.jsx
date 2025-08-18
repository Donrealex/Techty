import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutFounder from '../components/AboutFounder';
import Teams from '../components/Teams';

const About = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar style={"bg-[#F0F8FF]"} />
      <AboutHero />
      <AboutFounder />
      <Teams />
      <Footer style={"bg-[#495460]"} />
    </div>
  );
}

export default About