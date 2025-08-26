import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import SubHero from '../components/SubHero';
import Pricing from '../components/Pricing';

const Service = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar style={"bg-[#F0F8FF]"} />
      <ServiceHero />
      <SubHero />
      <Pricing />
      <Footer style={"bg-[#495460]"} />
     
    </div>
  );
}

export default Service