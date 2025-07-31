import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <section className="flex flex-col h-screen justify-between items-center">
      < Navbar  />
      < Hero />
      < Footer />
    </section>
  );
}

export default App