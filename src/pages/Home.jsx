import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SubHero from '../components/SubHero'
import Footer from '../components/Footer'
import Unleash from '../components/Unleash'

const Home = () => {
  return (
    
    <div className="flex flex-col h-screen justify-between min-w-full">

    <Navbar  /> 
    <Hero />
     {/* <SubHero /> */}
     <Unleash />
    <Footer />
        
    </div>
  )
}

export default Home