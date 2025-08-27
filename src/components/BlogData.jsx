import axios from 'axios';
import React from 'react'
import articlePhone from "../assets/articlePhone.svg"
import  { useEffect, useState } from "react";

const BlogData = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const res = await axios.get("https://dummyjson.com/posts");
         setPosts(res.data.posts);
       } catch (error) {
         console.log(error.message);
       }
     };
     fetchData();
   }, []);

   if (posts) {
     posts.splice(6, posts.length);
   }
  return (
    <div className="font-space grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full bg-[#F1F1F1]">
      {posts.map((post, index) => (
        <div
          key={index}
          className="cursor-default hover:border-t-2 hover:border-[#28D09A] items-start scale-100 hover:scale-105 transition-transform duration-500 flex flex-col gap-4 p-6 rounded-lg shadow-md hover:shadow-[#28D09A] hover:shadow-sm bg-white"
        >
          <img
            src={articlePhone}
            alt="img"
            className="w-full h-full object-cover rounded-md"
          />

          <p className="font-thin text-[#6F7681]">
            {new Date().toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <h2 className="text-2xl font-semibold uppercase">
            {post.title}
          </h2>
          <p className="text-sm font-thin text-[#6F7681]">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogData