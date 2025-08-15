import React from 'react'

const ServiceHero = () => {
  return (
    <section className="container font-space bg-[#F0F8FF] min-h-screen flex flex-col items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">
          We provide the best <span className="text-[#28D08A]">service</span>{" "}
          solutions.
        </h1>
        <p className='text-[#4E4E4E] text-sm text-center'>
          We're constantly pushing the boundaries of what's possible and seeking
          new ways to<br /> improve our services and help our clients achieve their
          goals.
        </p>
      </div>
      <div></div>
    </section>
  );
}

export default ServiceHero