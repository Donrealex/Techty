import React from 'react'
import founder from "../assets/founder.svg"

const AboutFounder = () => {
  return (
    <section className="container font-space  mx-auto bg-white py-10 md:flex flex-col md:flex-row">
      {/* The Text */}
      <div className="md:w-1/2 w-full p-4 md:p-8 space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Message from
          <span className="text-[#28D08A]"> Founder</span>
        </h2>
        <p className="text-[#4E4E4E] leading-relaxed text-sm md:text-base">
          I would like to take a moment to express my sincere gratitude for
          choosing our IT services. As the founder of this company, I am proud
          to say that we are committed to providing the best possible solutions
          for your business needs.
          <br /> <br />
          We understand the challenges that come with managing an enterprise in
          the digital age, and we are dedicated to delivering innovative and
          reliable IT services to help you navigate these challenges with ease.
          <br /> <br />
          Our team of experts is constantly working to improve our services and
          stay up-to-date with the latest technological advancements. We strive
          to provide personalized solutions that cater to your specific
          requirements, ensuring that your business operations run smoothly and
          efficiently.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">John Willams</h2>
        <p className="font-thin text-[#4E4E4E]">Founder, Ceo</p>
      </div>

      {/* The Image */}
      <div className="md:w-1/2 w-full h-64 md:h-full">
        <img
          src={founder}
          alt="founder"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default AboutFounder