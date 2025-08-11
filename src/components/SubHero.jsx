import React, { useState } from 'react'
import { subHeroData } from '../constants/data';



const SubHero = () => {
    const [activeId, setActiveId] = useState(subHeroData[0].id);

  return (
    <div className="h-screen items-center justify-center font-space">
      <p className="text-5xl font-bold text-center p-10">
        Empower your business with cutting-edge
        <span className="text-[#28D08A]"> solutions. </span>
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8 bg-white">
        {subHeroData.map((item) => (
          <section className="flex flex-col gap-4" key={item.id}>
            <div
              // key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`flex items-start space-x-4 p-6 cursor-pointer transition-all duration-300 border-b-4
            ${
              activeId === item.id
                ? "border-[#28D08A] bg-gray-100 shadow-lg" // Active look
                : "border-black"
            }`}
            >
              <h2 className="text-6xl text-[#28D08A] font-semibold">
                {item.num}
              </h2>
              <div className="text-gray-800">
                <h3 className="text-3xl font-semibold">{item.head}</h3>
                <p className="text-lg mt-1">{item.data}</p>
              </div>
            </div>
            <div>
              {activeId === item.id && (
                <div className="p-6">
                  <h4 className="text-xl font-semibold">Details</h4>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
      {/* <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8 bg-white">
        {subHeroData.map((item) => (
          <div
            key={item.id}
            className={`
            flex items-start space-x-4 p-6 cursor-pointer
            transition-all duration-300
            border-b-4
            ${
              activeId === item.id
                ? "border-[#28D08A]" // Active state
                : "border-black" // Inactive state
            }
          `}
            // 2. This onClick handler is the trigger that updates the state
            onClick={() => setActiveId(item.id)}
          >
            {/* ... content ... */}
      {/* <h2 className="text-6xl text-[#28D08A] font-semibold"> */}
      {/* {item.num} */}
      {/* </h2> */}
      {/* <div className="text-gray-800"> */}
      {/* <h3 className="text-3xl font-semibold">{item.head}</h3> */}
      {/* <p className="text-lg mt-1">{item.data}</p> */}
      {/* </div> */}
      {/* <div onClick={() => handleItemClick(item.id)}>...</div> */}
      {/* </div> */}
      {/* ))} */}
      {/* </div> */}

      {/* <div className="flex items-center justify-center p-10  ">
        {subHeroData.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 ">
            <h2 className="text-8xl text-[#28D08A] font-semibold">
              {item.num}
            </h2>
            <div className="md:grid-cols-2 lg:grid-cols-3 gap-10">
              <h3 className="text-3xl font-semibold">{item.head}</h3>
              <p className="text-lg">{item.data}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="my-10 h-0.25 bg-black "></div>
      {/* <div className="flex items-center justify-center p-10">
        <h1 className="text-8xl text-[#28D08A] font-semibold">01</h1>
        <div className="md:grid-cols-2 lg:grid-cols-3 gap-10">
          <h2 className="text-3xl font-semibold">Collect Ideas</h2>
          <p className="text-lg">
            Creating or improving products to meet our user needs.
          </p>
        </div>
        <h1 className="text-8xl text-[#28D08A] font-semibold">02</h1>
        <div className="md:grid-cols-2 lg:grid-cols-3 gap-10">
          <h2 className="text-3xl font-semibold">Data Analysis</h2>
          <p className="text-lg">
            Creating or improving products to meet our user needs.
          </p>
        </div>
        <h1 className="text-8xl text-[#28D08A] font-semibold">03</h1>
        <div className="md:grid-cols-2 lg:grid-cols-3 gap-10">
          <h2 className="text-3xl font-semibold">Analyze Product</h2>
          <p className="text-lg">
            Creating or improving products to meet our user needs.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default SubHero