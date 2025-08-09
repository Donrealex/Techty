import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SubHero from './components/SubHero';



const App = () => {
  return (
    <section className="flex flex-col h-screen justify-between items-center">
      <Navbar />
      <Hero />
      < SubHero />
      <Footer />
    </section>
  );
}

export default App