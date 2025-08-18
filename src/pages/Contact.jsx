import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactHero';

const Contact = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar  />
      <ContactHero />
      <Footer style={"bg-[#6F7681]"} />
    </div>
  );
}

export default Contact