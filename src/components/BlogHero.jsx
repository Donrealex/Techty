import React from 'react'
import blogImg from "../assets/blogImg.svg"

const BlogHero = () => {
  return (
    <section className="container font-space bg-[#F1F1F1] p-6 mt-28 items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold text-center mb-4">Our Blog</h1>
        <p className="text-center text-[#6F7681] text-lg  mb-8">
          We're constantly pushing the boundaries of what's
          <br />
          possible and seeking new ways to improve our
          <br />
          services.
        </p>
      </div>
      <div className="flex md:flex-row flex-col ">
        <div className="md:w-1/2 w-full h-full md:h-full">
          <img src={blogImg} alt="Blog" className="rounded-lg" />
        </div>
        <div className="text-start  gap-5 lg:space-y-8 bg-white md:w-1/2 p-5 w-full md:p-8 rounded-lg">
          <p className=" text-lg ">May 30, 2023</p>
          <p className="font-semibold text-4xl lg:text-4xl md:text-2xl pb-2">
            5 reasons why Techty is the go-to choice for small business.
          </p>
          <p>
            Let us manage your IT for you so that you can get back to doing what
            you do best.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogHero