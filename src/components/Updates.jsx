import React from 'react'
import { UpdatesData } from '../constants/data';

const Updates = () => {
  return (
    <div className=" font-space bg-[#F0F8FF] min-h-screen flex flex-col items-center justify-center p-4 md:p-10">
      <h1 className="text-3xl text-center sm:text-4xl font-bold leading-tight mb-10">
        Here’s our latest <br /> updates from the{" "}
        <span className="text-[#28D08A]">news</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 rounded-lg">
        {UpdatesData.map((items) => (
          <div className="text-gray-600 pb-4 bg-white rounded-lg scale-100 hover:scale-105 transition-transform duration-500">
            <img
              src={items.img}
              alt="update icon"
              className="w-full object-cover mb-4"
            />
            <p className="font-thin text-sm px-3">{items.date}</p>
            <h2 className="text-xl font-semibold px-3">{items.head}</h2>
            <p className="text-gray-600 font-thin text-sm px-3">{items.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Updates