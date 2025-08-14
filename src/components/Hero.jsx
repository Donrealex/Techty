import React from "react";
import Button from "./Button";
import heroImg from "../assets/heroImg.svg";

const Hero = () => {
  const printMsg = () => {};
  return (
    // error
    <div className=" h-screen bg-[#F0F8FF] items-center justify-center font-space gap-10 h[1024px]">
      {/* HERO TEXT AND IMAGE */}
      <div className="min-h-screen bg-[#F0F8FF] flex flex-col items-center justify-center font-space gap-10 px-4 py-8 overflow-x-hidden">
        {/* HERO TEXT AND IMAGE */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-10">
          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-3/5 p-4 lg:p-12 gap-5 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Secure <span className="text-[#28D08A]">business</span> <br />with
              Techty security.
            </h1>
            <p className="text-base sm:text-lg">
              We have considered our solutions to support every stage of your
              growth. We are the fastest and easiest way to launch an attractive
              and feature-complete SaaS showcase.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                func={printMsg}
                name="Request a Free Demo"
                style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
              />
              <Button
                func={printMsg}
                name="Hire an expert"
                style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] transition duration-300"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center w-full lg:w-2/5">
            <img src={heroImg} alt="Hero" className="w-full h-auto max-w-md" />
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-10 h-px w-full max-w-6xl bg-gray-300"></div>

        {/* Text and Logos Section */}
        <div className="p-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <p className="font-bold text-2xl ">
            Thousands of<br />businesses use Techty
          </p>

          <div className="overflow-hidden whitespace-nowrap w-[750px] ">
            <div className="inline-block animate-scroll">
              <div className="flex gap-10 w-full">
                <img src="/src/assets/Logo.svg" alt="logo" className="h-16" />
                <img
                  src="/src/assets/LogoIipsum.svg"
                  alt="logoIpsium"
                  className="h-16"
                />
                <img
                  src="/src/assets/Ipsum.svg"
                  alt="Ipsium"
                  className="h-16"
                />
                <img
                  src="/src/assets/LogoRound.svg"
                  alt="LogoRound"
                  className="h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
