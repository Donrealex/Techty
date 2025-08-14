import axios from 'axios';
import rating from "../assets/rating.svg"
import reviewImg from "../assets/reviewImg.svg";
import React, { useEffect, useState } from 'react'

const Review = () => {
    const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
      const res = await axios.get("https://dummyjson.com/comments")
            setComments(res.data.comments)
      
    } catch (error) {
        console.log(error.message)
    }
}
        fetchData()
  }, []);

  if(comments){
    comments.splice(6, comments.length)
  }
  return (
    <div className="container mx-auto px-4 py-8 font-space flex flex-col gap-8 items-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold px-4">
        Read what the <span className="text-[#28D09A]">customers</span>
        <br /> are saying about us.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="cursor-default hover:border-t-2 hover:border-[#28D09A] items-start scale-100 hover:scale-105 transition-transform duration-500 flex flex-col gap-4 p-6 rounded-lg shadow-md hover:shadow-[#28D09A] hover:shadow-sm bg-white"
          >
            <img src={rating} alt="Rating" className="h-6" />
            <h2 className="text-sm sm:text-base font-normal text-gray-800 leading-relaxed">
              “We struggled for years to find an IT company that we could trust.
              While others would try to sell us IT solutions, we actually took
              the time to listen to what made us unique as a business.”{" "}
              {comment.body}
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <img
                src={reviewImg}
                alt="User"
                className="w-10 h-10 rounded-full "
              />
              <div>
                <p className="text-sm font-bold uppercase text-gray-900">
                  {comment.user.username}
                </p>
                <p className="text-sm font-normal capitalize text-gray-800">
                  {comment.user.fullname}
                </p>
                <p className="text-xs font-light text-gray-600">
                  Financial Analyst
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-900">
                {(
                  comment.user.fullname
                    ?.split(" ")
                    .map((name) => name[0])
                    .join("") || ""
                ).toUpperCase()}
                  
              </div>

              <div>
                <p className="text-sm font-bold uppercase text-gray-900">
                  {comment.user.username}
                </p>
                <p className="text-sm font-normal capitalize text-gray-800">
                  {comment.user.fullname}
                </p>
                <p className="text-xs font-light text-gray-600">
                  Financial Analyst
                </p>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review