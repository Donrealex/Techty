import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';

const Service = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      {/* <Navbar /> */}
      <ServiceHero />

      {/* <Footer /> */}
    </div>
  );
}

export default Service