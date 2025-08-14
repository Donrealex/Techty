import React from "react";
import Button from "./Button";
import guy from "../assets/guy.PNG";

const Solution = () => {
  const printMsg = () => {};
  return (
    // RESPONSIVENES NOT PERFECT
    <div className="container relative font-space bg-white px-4 py-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center gap-5 w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          Our most priority is to provide the effective
          <br />
          <span className="text-[#28D08A]">solutions.</span>
        </h1>
        <p className="text-base text-gray-700">
          With a library full of thousands of templates to choose from, go idea
          to launch in a matter of minutes. Try uploading your own for sale.
        </p>
        <Button
          func={printMsg}
          name="Request a Free Demo"
          style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] w-full sm:w-[242px] transition duration-300"
        />
      </div>

      {/* Image & Card Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img src={guy} alt="Guy" className="w-full max-w-md" />

        {/* Floating Card */}
        <div className="absolute bottom-6 lg:right-[300px] md:right-[10px] right-0  bg-white rounded-2xl p-4 shadow-md w-[90%] sm:w-60 ">
          <h1 className="text-2xl font-bold">$946K</h1>
          <p className="text-sm text-gray-600">
            As a translator, I want to integrate crowdin webhook to notify
            translators about changed strings
          </p>
          <Button
            func={printMsg}
            name="Refactoring"
            style="bg-[#DDBF00] rounded-md text-[#B16D00] px-4 py-2 hover:bg-yellow-300 w-[108px] transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Solution;
