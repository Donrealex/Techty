import React, { useState } from "react";
import Button from "./Button.jsx";

import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import techtyIcon from "../assets/techtyIcon.svg";

const Navbar = ({ style }) => {
  const printMsg = () => { };
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
   
    <nav
      className={`${style}  h-20 w-full flex items-center justify-center font-extrabold md:p-14 font-space gap-15 fixed left16 z-50`}
    >
      <div className=" flex gap-28 items-center justify-center w-full">
        <div>
          <NavLink to="/">
            <img src={techtyIcon} alt="Techty Icon" />
          </NavLink>
        </div>
        <div className="hidden md:flex items-center justify-center gap-15">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Service
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Contact
          </NavLink>
          <div>
            <Button
              func={printMsg}
              name="Request a Free Demo "
              style={
                "bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] transition duration-300"
              }
            >
              Button
            </Button>
          </div>
        </div>
        <IoMenuSharp className="text-3xl md:hidden p" onClick={handleNav} />
      </div>

      {/* Mobile menu */}
     
      <div
        className={`fixed top-0 left-0 w-full max-h-screen bg-white z-40 transform transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile menu content */}
        <div className="flex justify-between items-center p-6">
          <NavLink to="/">
            <img src="/src/assets/techtyIcon.svg" alt="Techty Icon" />
          </NavLink>
          <IoClose className="text-3xl" onClick={handleNav} />
        </div>
        <div className=" w-10 pl-10 font-extrabold flex flex-col gap-6 md:flex-row">
          <div className="  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
              onClick={handleNav}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
              onClick={handleNav}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
              onClick={handleNav}
            >
              Service
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
              onClick={handleNav}
            >
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
              onClick={handleNav}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
