import React from 'react'
import { TeamsData } from '../constants/data';

const Teams = () => {
  return (
    <section className="container font-space bg-[#F0F8FF] min-h-screen flex flex-col items-center justify-center p-4 md:p-10">
      <h1 className="text-3xl text-center sm:text-4xl font-bold leading-tight mb-10">
        Our <span className="text-[#28D08A]">team</span> behind all the success
        we have
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {TeamsData.map((team) => (
          <div className="bg-white rounded-lg shadow-md p4 flex flex-col items-start scale-100 hover:scale-105 transition-transform duration-500">
            <img src={team.img} alt="Team member" className="w-full h-full" />
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-[#4E4E4E]">{team.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams