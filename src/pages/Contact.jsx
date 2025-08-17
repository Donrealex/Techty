import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar className="bg-white" />
      <Footer className="bg-[#6F7681]" />
    </div>
  );
}

export default Contact