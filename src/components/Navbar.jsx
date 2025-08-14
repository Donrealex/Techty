import React, { useState } from "react";
import Button from "./Button.jsx";
// import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import techtyIcon from "../assets/techtyIcon.svg"

const Navbar = () => {
  const printMsg = () => {};

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-[#F0F8FF] h-20 w-full flex items-center justify-between p-4 md:p-14 font-space gap-10">
      <div className="container flex justify-between items-center">
        <NavLink to="/">
          <img src={techtyIcon} alt="Techty Icon" />
        </NavLink>
        <div className="hidden md:flex items-center justify-center gap-10">
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
        <IoMenuSharp className="text-2xl md:hidden" onClick={handleNav} />
      </div> 
      
      
      {/* Mobile menu */}
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-white fixed z-[4] top-0 right-0 w-full min-h-screen md:hidden"
            : "hidden"
        }
      >
        {/* Mobile menu content */}
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <NavLink to="/">
            <img src="/src/assets/techtyIcon.svg" alt="Techty Icon" />
          </NavLink>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <div className="text-base font-medium flex flex-col gap-10 md:flex-row">
          <div className="px-[15px] py-[20px] font-normal leading-[24px] border-y border-gray">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#28D08A] underline underline-offset-10 leading-4"
                  : "leading-4"
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
                isActive
                  ? "text-[#28D08A] underline underline-offset-10 leading-4"
                  : "leading-4"
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
                isActive
                  ? "text-[#28D08A] underline underline-offset-10 leading-4"
                  : "leading-4"
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
                isActive
                  ? "text-[#28D08A] underline underline-offset-10 leading-4"
                  : "leading-4"
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
                isActive
                  ? "text-[#28D08A] underline underline-offset-10 leading-4"
                  : "leading-4"
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
