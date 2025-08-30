import React, { useState } from 'react'
import subPc from "../assets/subPc.svg";
import subTable from "../assets/subTable.PNG";
import subColors from "../assets/subColors.PNG";
import Button from './Button';
import { CheckCircle, CircleCheckBig,  } from 'lucide-react';




const SubHero = () => {
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);


  return (
    

    <section className=" flex flex-col font-space mt-10 w-full px-4 sm:px-6 lg:px-10">
      <div className="flex items-center justify-center py-10 sm:py-16">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Empower your business
          <br />
          with cutting-edge <span className="text-green-500">solutions</span>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row border-b border-gray-300 mb-10 gap-6">
        {[1, 2, 3].map((num) => {
          const isActive =
            (num === 1 && first) ||
            (num === 2 && second) ||
            (num === 3 && third);
          const setActive = () => {
            setFirst(num === 1);
            setSecond(num === 2);
            setThird(num === 3);
          };
          const titles = ["Collect Ideas", "Data Analysis", "Analyze Products"];
          return (
            <div
              key={num}
              onClick={setActive}
              className={`flex items-start gap-3 pb-5 cursor-pointer ${
                isActive ? "border-b-2 border-[#28D08A]" : ""
              }`}
            >
              <h1
                className={`text-4xl sm:text-5xl font-extrabold ${
                  isActive ? "text-[#28D08A]" : "text-black"
                }`}
              >
                0{num}
              </h1>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg">{titles[num - 1]}</p>
                <p className="text-sm sm:text-base">
                  Creating or improving products to meet our user needs.
                </p>
              </div>
            </div>
          );
        })}
      </div>

     
      <div>
        {(first || second || third) && (
          <div className="grid md:grid-cols-[50%_50%] md:py-14  items-center gap-10  mb-10">
            <img
              src={first ? subPc : second ? subTable : subColors}
              alt="section image"
              className="w-full object-contain rounded-lg"
            />
            <div className="flex flex-col  gap-6">
              <h1 className="text-2xl sm:text-3xl font-semibold">
                {first
                  ? "Collect Ideas"
                  : second
                  ? "Data Analysis"
                  : "Finalize Product"}
              </h1>
              <p className="text-sm sm:text-base text-[#4E4E4E] text-justify">
                With our Techty company, you can create landing pages that
                convert more visitors than any other website. You can easily
                create a page using a variety of unique blocks.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle />
                  <span>
                    We collect ideas from different design inspirations.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle />
                  <span>Analysis data for any kind of corrections.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle />
                  <span>
                    Finalize the product for the production to be done.
                  </span>
                </div>
              </div>
              <div>
                <Button
                  name="Request a Free Demo"
                  style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SubHero