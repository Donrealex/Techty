import React from "react";
import Button from "./Button";
import heroImg from "../assets/heroImg.svg";




const Hero = () => {
  
  const printMsg = () => {};
  return (
    <div className=" h-screen bg-[#F0F8FF] items-center justify-center gap-10">
      {/* HERO TEXT AND IMAGE */}
      <div className="  flex flex-col-2  ">
        <div className="flex flex-col items-center justify-center w-3/5 p-12 gap-5">
          <h1 className="text-6xl font-bold text-center">
            Secure <span className="text-[#28D08A]">business</span> with Techty
            security.
          </h1>
          <p className="text-lg text-center ">
            We have considered our solutions to support every stage of your
            growth. We are the fastest and easiest way to launch an attractive
            and feature-complete SaaS showcase.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              func={printMsg}
              name="Request  a Free Demo "
              style={
                "bg-[#28D08A] rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
              }
            >
              Button
            </Button>
            <Button
              func={printMsg}
              name="Hire an expert"
              style={
                "bg-black rounded-md text-white px-4 py-2 hover:bg-gray-800 transition duration-300"
              }
            >
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-2/5">
          <img src={heroImg} alt="Image" className="wfull hauto" />
        </div>
      </div>
      {/* THE LINE */}
      <div className="my-10 h-0.25 bg-black "></div>
      {/* THE TEXT BELOW */}
      <div className="p-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <p className="font-bold text-2xl ">Thousands of businesses use Techty</p>
      
         
        <div className="flex gap-10">
          <img src="/src/assets/Logo.svg" alt="logo" />
          <img src="/src/assets/LogoIipsum.svg" alt="logoIpsium" />
          <img src="/src/assets/Ipsum.svg" alt="Ipsium" />
          <img src="/src/assets/LogoRound.svg" alt="LogoRound" />
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
