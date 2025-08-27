import React from 'react'
import { TeamsData } from '../constants/data';

const Teams = () => {
  return (
    <section className=" font-space py-8 px-4 pb-20 flex flex-col items-center justify-center  ">
      <h1 className="text-3xl text-center sm:text-4xl font-bold leading-tight mb-10">
        Our <span className="text-[#28D08A]">team</span> behind all the success
        we have
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-8 lg:grid-cols-4 gap-4">
        {TeamsData.map((team) => (
          <div className=" rounded-lg shadow-md flex flex-col items-start scale-100 hover:scale-105 transition-transform duration-500">
            <img
              src={team.img}
              alt="Team Member"
              className="w-full h-full rounded-lg"
            />
            <h2 className="text-xl pl-2 font-semibold">{team.name}</h2>
            <p className="text-[#4E4E4E] pl-2">{team.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams