import React, { useState } from "react";
import Button from "./Button.jsx";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import techtyIcon from "../assets/techtyIcon.svg";

const Navbar = ({ style }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navigate = useNavigate();
  const location = useLocation();

  // Helper: navigate to route and scroll to element id (smooth)
  const goTo = (path, targetId) => (e) => {
    e.preventDefault();

    const scroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: scroll to top if id isn't found yet
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const samePath = location.pathname === path;
    if (samePath) {
      scroll();
    } else {
      // navigate and set hash to help browsers jump when element exists
      navigate(`${path}#${targetId}`);
      // give the page a tick to render before scrolling
      setTimeout(scroll, 50);
    }

    // close mobile menu if open
    if (nav) setNav(false);
  };

  return (
    <nav
      className={`${style} h-20 w-full flex items-center justify-center font-extrabold p-14 font-space gap-15 fixed z-50`}
    >
      <div className="flex gap-28 items-center justify-center w-full">
        <div>
          <NavLink to="/">
            <img
              src={techtyIcon}
              alt="Techty Icon"
              className="h-full object-contain"
            />
          </NavLink>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center gap-15">
          <NavLink
            id="nav-home"
            to="/"
            onClick={goTo("/", "home")}
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            id="nav-about"
            to="/about"
            onClick={goTo("/about", "about")}
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            About
          </NavLink>

          <NavLink
            id="nav-service"
            to="/service"
            onClick={goTo("/service", "service")}
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Service
          </NavLink>

          <NavLink
            id="nav-blog"
            to="/blog"
            onClick={goTo("/blog", "blog")}
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Blog
          </NavLink>

          <NavLink
            id="nav-contact"
            to="/contact"
            onClick={goTo("/contact", "contact")}
            className={({ isActive }) =>
              isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
            }
          >
            Contact
          </NavLink>

          <div>
            <Button
              name="Request a Free Demo "
              style={
                "bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D08A] transition duration-300"
              }
            >
              Button
            </Button>
          </div>
        </div>

        <IoMenuSharp className="text-3xl md:hidden" onClick={handleNav} />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 left-0 w-full max-h-screen bg-white z-40 transform transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6">
          <NavLink to="/">
            <img src="/src/assets/techtyIcon.svg" alt="Techty Icon" />
          </NavLink>
          <IoClose className="text-3xl" onClick={handleNav} />
        </div>

        <div className="w-10 pl-10 font-extrabold flex flex-col gap-6 md:flex-row">
          <div>
            <NavLink
              id="m-home"
              to="/"
              onClick={goTo("/", "home")}
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              id="m-about"
              to="/about"
              onClick={goTo("/about", "about")}
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              id="m-service"
              to="/service"
              onClick={goTo("/service", "service")}
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
            >
              Service
            </NavLink>
          </div>
          <div>
            <NavLink
              id="m-blog"
              to="/blog"
              onClick={goTo("/blog", "blog")}
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
            >
              Blog
            </NavLink>
          </div>
          <div>
            <NavLink
              id="m-contact"
              to="/contact"
              onClick={goTo("/contact", "contact")}
              className={({ isActive }) =>
                isActive ? "text-[#28D08A] underline underline-offset-10 " : ""
              }
            >
              Contact
            </NavLink>
          </div>

          <div>
            <Button
              name="Request a Free Demo "
              style={
                "bg-black w-55 h-10 rounded-md text-white hover:bg-[#28D08A] transition duration-300 mb-10"
              }
            >
              Request a Free Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;