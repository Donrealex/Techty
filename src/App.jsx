import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About  from "./pages/About"
import Service from "./pages/Service"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SubHero from './components/SubHero';
import Footer from './components/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

    // <section className="flex flex-col h-screen justify-between items-center">
    //   <Navbar />
    //   <Hero />
    //   <SubHero />
    //   {/* <Footer /> */}
    // </section>
  );
}

export default App