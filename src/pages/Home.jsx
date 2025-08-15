import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import Footer from '../components/Footer'
import Unleash from '../components/Unleash'
import Solution from '../components/Solution'
import Strategy from '../components/Strategy'
import Review from '../components/Review'
import Updates from '../components/Updates'

const Home = () => {
  return (
    
    <div className="flex flex-col h-screen justify-between min-w-full CONTAINER">

    <Navbar  /> 
    <Hero />
     <SubHero />
     <Unleash />
     <Solution />
     < Strategy />
     < Review />
     < Updates />
    <Footer />
        
    </div>
  )
}

export default Home