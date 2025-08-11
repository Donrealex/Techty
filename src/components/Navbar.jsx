import React from "react";
import Button from "./Button.jsx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const printMsg = () => {};

  return (
    <nav className="bg-[#F0F8FF] h-20 w-full flex items-center justify-between p-14 font-space gap-10">
      <img src="/src/assets/techtyIcon.svg" alt="Techty Icon" />

      <div className="items-center justify-center flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Service"
          className={({ isActive }) =>
            isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
          }
        >
          Service
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
          }
        >
          Contact
        </NavLink>
      </div>

      <Button
        func={printMsg}
        name="Request a Free Demo "
        style={
          "bg-black rounded-md text-white px-4 py-2 hover:bg-gray-800 transition duration-300"
        }
      >
        Button
      </Button>
    </nav>
  );
};

export default Navbar;
