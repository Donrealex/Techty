import React from 'react'
import aboutImage from "../assets/aboutImage.svg";

const AboutHero = () => {


  return (
   
    <section className="container font-space mx-auto bg-[#F0F8FF] py-10  md:flex flex-col md:flex-row">
      {/* The Image */}
      <div className="md:w-1/2 w-full h-64 md:h-full">
        <img
          src={aboutImage}
          alt="Team Discussion"
          className="w-full h-full object-cover"
        />
      </div>
      {/* The Text */}
      <div className="md:w-1/2 w-full p-4 md:p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#28D08A]">About</span>Techty
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          We’re constantly pushing the boundaries of what’s possible and seeking
          new ways to improve our services and help our clients achieve their
          goals.
        </p>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Vision</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our vision is to create a better financial future for everyone. We
            believe that everyone deserves access to financial services and
            resources that empower them to achieve their goals.
          </p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Mission</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We’re on a mission to empower people to take control of their
            finances and achieve their goals. We believe that everyone should
            have access to the tools and resources they need to make smart
            financial decisions.
          </p>
        </div>
      </div>
    </section>
  );
};


export default AboutHero