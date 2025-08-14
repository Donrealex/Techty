import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import Footer from '../components/Footer'
import Unleash from '../components/Unleash'
import Solution from '../components/Solution'

const Home = () => {
  return (
    
    <div className="flex flex-col h-screen justify-between min-w-full CONTAINER">

    <Navbar  /> 
    <Hero />
     <SubHero />
     <Unleash />
     <Solution />
    <Footer />
        
    </div>
  )
}

export default Home