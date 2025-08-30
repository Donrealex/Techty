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
    <div className="">
      <Navbar style={"bg-[#F0F8FF]"} />
      <Hero />
      <SubHero />
      <Unleash />
      <Solution />
      <Strategy />
      <Review />
      <Updates />
      <Footer style={"bg-[#495460]"} />
    </div>
  );
}

export default Home