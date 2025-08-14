import React from 'react'
import screenshot from "../assets/screenshot.svg"
import { StrategyData } from '../constants/data';

const Strategy = () => {
  return (
  
    <div className="container mx-auto px-4 py-8 bg-black text-white font-space">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img
          src={screenshot}
          alt="Screenshot"
          className="w-full max-w-md lg:max-w-sm object-contain"
        />
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Personalize your business
            <br />
            <span className="text-[#28D08A]">strategy</span> to reach out.
          </h1>
          <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Our advisors approach each client individually, so each time we
            select the appropriate insurance for your needs. Thanks to
            conversation, we will adjust the appropriate cover.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* <div className='flex flex-col-2 gap-4'> */}
            {StrategyData.map((items, index) => (
              <div key={index} className=" items-center gap-4">
                <span className="text-3xl sm:text-4xl font-semibold">
                  {items.num}
                </span>
                <div>
                  <h2 className="text-lg font-medium">{items.head}</h2>
                  <img
                    src={items.icon}
                    alt="rating icon"
                    className="h-6 mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategy