import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHero from '../components/BlogHero';
import Articles from '../components/Articles';
import BlogData from '../components/BlogData';

const Blog = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar className="bg-white" />
      <BlogHero />
      <BlogData />
      {/* <Articles /> */}
      <Footer style={"bg-[#6F7681]"} />
    </div>
  );
}

export default Blog