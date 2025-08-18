import React, { useState } from 'react'
import subPc from "../assets/subPc.svg";
import subTable from "../assets/subTable.PNG";
import subColors from "../assets/subColors.PNG";
import Button from './Button';
import { CheckCircle, CircleCheckBig,  } from 'lucide-react';
// import { subHeroData } from '../constants/data';




const SubHero = () => {
    // const [activeId, setActiveId] = useState(subHeroData[0].id);
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    const printMsg = () => {};

  return (
    // <div className="container h-screen items-center justify-center font-space">
    //   <p className="text-5xl font-bold text-center p-10">
    //     Empower your business with cutting-edge
    //     <span className="text-[#28D08A]"> solutions. </span>
    //   </p>
    //   <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8 bg-white">
    //     {subHeroData.map((item) => (
    //       <section className="flex flex-col gap-4" key={item.id}>
    //         <div onClick={() => setActiveId(item.id)}
    //           className={`flex items-start space-x-4 p-6 cursor-pointer transition-all duration-300 border-b-4
    //         ${
    //           activeId === item.id
    //             ? "border-[#28D08A] bg-gray-100 shadow-lg" // Active look
    //             : "border-black"
    //         }`}
    //         >
    //           <h2 className="text-6xl text-[#28D08A] font-semibold">
    //             {item.num}
    //           </h2>
    //           <div className="text-gray-800">
    //             <h3 className="text-3xl font-semibold">{item.head}</h3>
    //             <p className="text-lg mt-1">{item.data}</p>
    //           </div>
    //         </div>
    //         <div>
    //           {activeId === item.id && (
    //             <div className="p-6">
    //               <h4 className="text-xl font-semibold">Details</h4>
    //               <img src={item.img} alt={item.head} className="w-full h-auto mt-4" />
    //               <p className="text-gray-600">{item.content}</p>
    //             </div>
    //           )}
    //         </div>
    //       </section>
    //     ))}
    //   </div>
    // </div>
    <section className="flex flex-col font-space container mt-10 w-full">
      <div className="flex items-center justify-center py-25">
        <p className="text-center text-5xl font-extrabold">
          Empower your business
          <br /> with cutting-edge{" "}
          <span className="text-green-500">solutions</span>
        </p>
      </div>
      <div className="flex mx-15 border-b-1 border-b-gray-300 mb-10 gap-2">
        <div
          onClick={() => {
            setFirst(true), setSecond(false), setThird(false);
          }}
          className={
            first
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-2 border-[#28D08A] "
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={`text-6xl font-extrabold ${first ? "text-[#28D08A]" : "text-black"}`}>01</h1>
          <div className="flex flex-col gap-2 ">
            <p className="font-semibold text-lg">Collect Ideas</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(true), setThird(false);
          }}
          className={
            second
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-2 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={`font-extrabold text-6xl ${second ? "text-[#28D08A]" : "text-black"}`}>02</h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Data Analysis</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
        <div
          onClick={() => {
            setFirst(false), setSecond(false), setThird(true);
          }}
          className={
            third
              ? "flex items-center gap-3 pb-7 cursor-pointer border-b-2 border-[#28D08A]"
              : "flex items-center gap-3 pb-7 cursor-pointer"
          }
        >
          <h1 className={`font-extrabold text-6xl ${third ? "text-[#28D08A]" : "text-black"}`}>03</h1>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-lg">Analyze Products</p>
            <p>Creating or improving products to meet our user needs.</p>
          </div>
        </div>
      </div>
      <div>
        {first ? (
          <div className="flex items-center  mx-15 gap-10">
            <img
              src={subPc}
              alt="image of a phone and laptop"
              className="w-[550px]"
            />

            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Collect Ideas</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>
                    We collect ideas from different design inspirations.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>Analysis data for any kind of corrections.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleCheckBig className="" />

                  <span>
                    Finalize the product for the production to be done.
                  </span>
                </div>
              </div>
              <div className="flex">
                <Button
                  func={printMsg}
                  name="Request a Free Demo"
                  style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {second ? (
          <div className="flex items-center  mx-15 mb-10 gap-10">
            <img
              src={subTable}
              alt="image of pencil, paper and book"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Data Analysis</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>
                    We collect ideas from different design inspirations.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>Analysis data for any kind of corrections.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>
                    Finalize the product for the production to be done.
                  </span>
                </div>
              </div>
              <div className="flex">
                <Button
                  func={printMsg}
                  name="Request a Free Demo"
                  style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {third ? (
          <div className="flex items-center  mx-15 mb-10 gap-10">
            <img
              src={subColors}
              alt="image of 8 colored papers"
              className="w-[550px]"
            />
            <div className="flex flex-col gap-7">
              <h1 className="text-3xl font-semibold">Finalize Product</h1>
              <p className="text-md text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more <br /> visitors than any other website. You can
                easily create a page using a variety <br /> of unique blocks.
              </p>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>
                    We collect ideas from different design inspirations.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>Analysis data for any kind of corrections.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="" />
                  <span>
                    Finalize the product for the production to be done.
                  </span>
                </div>
              </div>
              <div className="flex">
                <Button
                  func={printMsg}
                  name="Request a Free Demo"
                  style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default SubHero