import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHero from '../components/BlogHero';
import Articles from '../components/Articles';

const Blog = () => {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full">
      <Navbar className="bg-white" />
      <BlogHero />
      <Articles />
      <Footer />
    </div>
  );
}

export default Blog