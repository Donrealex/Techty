import React from 'react'
import { ServiceHeroData } from '../constants/data';
import { NavLink } from 'react-router-dom';

const ServiceHero = () => {
  return (
    <section className="container font-space bg-[#F0F8FF]  flex flex-col items-center justify-center p-4 md:p-8 mt-28">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          We provide the best <span className="text-[#28D08A]">service</span>{" "}
          solutions.
        </h1>
        <p className="text-[#4E4E4E] text-sm md:text-base text-center mx-auto max-w-lg">
          We're constantly pushing the boundaries of what's possible and seeking
          new ways to improve our services and help our clients achieve their
          goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ServiceHeroData.map((item) => (
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md scale-100 hover:scale-105 transition-transform duration-500">
            <img
              src={item.icon}
              alt="icon"
              className="w-8 h-8 md:w-12 md:h-12 mb-4"
            />
            <h3 className="text-lg font-semibold">{item.head}</h3>
            <p className="text-gray-600 text-sm md:text-base">{item.content}</p>
            <NavLink to="/contact">
              <img src={item.rightArrow} alt="Right Arrow" className="mt-4" />
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceHero