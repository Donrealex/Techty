import React from 'react'
import Button from './Button';
import { CheckCircle, XCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section className=" font-space bg-[#F0F8FF] rounded-lg p-6 grid gap-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        We have the best <span className="text-[#28D08A]">pricing</span>
        <br /> package for you
      </h2>

      {/* Pricing Card 1 */}
      <div className="flex flex-col lg:flex-row bg-white p-6 sm:p-8 gap-6 rounded-md">
        <div className="flex-1 py-4">
          <h2 className="text-xl sm:text-2xl font-semibold">On Demand</h2>
          <p className="text-sm text-gray-500 mt-1">
            Get all these features when you are using as starter.
          </p>

          <div className="flex flex-col sm:flex-row mt-6">
            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Unlimited Projects</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Analytics dashboard</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Unlimited Projects</span>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 sm:pl-6 text-gray-700 mt-4 sm:mt-0">
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Email notifications</span>
              </div>
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Insights panel</span>
              </div>
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Share features</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F8FF] rounded-lg flex flex-col items-center justify-center w-full lg:w-72 h-auto m-2 p-4 gap-4">
          <h2 className="text-base sm:text-lg font-bold">Quick Solutions</h2>
          <h3 className="text-4xl sm:text-6xl font-bold mt-2">
            $20 <span className="text-lg font-normal">/hour</span>
          </h3>
          <Button
            name="Hire an Expert"
            style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] transition duration-300"
          >
            Button
          </Button>
        </div>
      </div>

      {/* Pricing Card 2 */}
      <div className="flex flex-col lg:flex-row bg-white p-6 sm:p-8 gap-6 rounded-md">
        <div className="flex-1 py-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Maintenance</h2>
          <p className="text-sm text-gray-500 mt-1">
            Get all these features when you are using as starter.
          </p>

          <div className="flex flex-col sm:flex-row mt-6">
            <div className="space-y-4 sm:space-y-6 text-gray-700">
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Unlimited Projects</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Analytics dashboard</span>
              </div>
              <div className="flex gap-2 items-center">
                <CheckCircle className="text-[#28D08A]" />
                <span>Unlimited Projects</span>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 sm:pl-6 text-gray-700 mt-4 sm:mt-0">
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Email notifications</span>
              </div>
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Insights panel</span>
              </div>
              <div className="flex gap-2 items-center">
                <XCircle className="w-5 h-5 text-gray-400" />
                <span>Share features</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0F8FF] rounded-lg flex flex-col items-center justify-center w-full lg:w-72 h-auto m-2 p-4 gap-4">
          <h2 className="text-base sm:text-lg font-bold">Monthly Solutions</h2>
          <h3 className="text-4xl sm:text-6xl font-bold mt-2">
            $99 <span className="text-lg font-normal">/hour</span>
          </h3>
          <Button
            name="Hire an Expert"
            style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] transition duration-300"
          >
            Button
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Pricing