import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import Button from './Button';

const ContactHero = () => {
     const printMsg = () => {};
  return (
    <section className="container bg-[#F1F1F1] mt-28 font-space py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-[#F1F1F1] mt-2">
          We’re constantly pushing the boundaries of what’s possible and seeking
          new ways to improve our services.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-lg font-semibold mb-6">
            We’re happy to discuss your project and answer any question
          </h3>
          {/* contact information */}
          <div className="space-y-6">
            <div className="flex flex-col-2 items-start gap-3">
              <Phone className="w-6 h-6 text-[#28D08A]" />
              <div>
                <p className="font-medium">Toll Number</p>
                <p className="text-[#6F7681] text-sm">+234 801 272 3390</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-[#28D08A]" />
              <div>
                <p className="font-medium">Mail Address</p>
                <p className="text-[#6F7681] text-sm">info@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#28D08A]" />
              <div>
                <p className="font-medium">Working Hours</p>
                <p className="text-[#6F7681] text-sm">
                  Mon - Friday, 9a.m - 8 p.m
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#28D08A]" />
              <div>
                <p className="font-medium">Office Address</p>
                <p className="text-[#6F7681] text-sm">Ikoyi, Lagos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold">Send Us Message</h3>
          <p className="text-[gray-500] text-sm mt-1 mb-4">
            Feel free to fill up the form and our team will get back to you
            within 24 hours.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4 ">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 border border-gray-200 bg-[#F1F1F1] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#28D08A]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 border border-gray-200 bg-[#F1F1F1] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#28D08A]"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border border-gray-200 bg-[#F1F1F1] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#28D08A]"
            ></textarea>
            <Button
              func={printMsg}
              name="Send Message"
              style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactHero