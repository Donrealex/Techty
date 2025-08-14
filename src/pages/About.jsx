import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar />
      <Footer />
    </div>
  );
}

export default About