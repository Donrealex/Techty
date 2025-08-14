import React from 'react'
import { unleashData } from '../constants/data';

const Unleash = () => {
  return (
   
    <div className=" container flex flex-col lg:flex-row items-start justify-between bg-[#F0F8FF] py-14 px-6 font-space gap-10">
      {/* Left Heading */}
      <h1 className="text-3xl md:text-4xl font-bold lg:w-1/3">
        <span className="text-[#28D08A]">Unleash </span> businesses'
        <br className="hidden lg:block" /> full potential
      </h1>

      {/* Right Cards */}
      <div className="flex flex-wrap gap-6 lg:w-2/3">
        {unleashData.map((items) => (
          <div
            key={items.head}
            className="flex flex-col items-start p-4 gap-3 w-full sm:w-[45%] lg:w-[30%] "
          >
            <img src={items.icon} alt={items.head} className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-semibold">{items.head}</h2>
              <p className="text-gray-600 text-sm font-light">
                {items.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Unleash