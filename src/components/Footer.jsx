import React from "react";
import Button from "./Button";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import footerIcon from "../assets/footerIcon.svg";

const Footer = ({ style }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to a route and scroll to a specific element id
  const goTo = (path, targetId) => (e) => {
    e.preventDefault();

    const doScroll = () => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback if target doesn't exist yet
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname === path) {
      doScroll();
    } else {
      navigate(`${path}#${targetId}`);
      setTimeout(doScroll, 50);
    }
  };

  return (
    <div
      className={`${style} flex flex-col w-full text-white items-center justify-between font-space px-4 py-10`}
    >
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="font-bold text-3xl md:text-4xl">
          Ready to take your business
          <br /> to the next level?
        </p>
        <Button
          name="Request a Free Demo"
          style="bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
        />
      </div>

      {/* Divider Line */}
      <div className="my-10 h-px w-full max-w-6xl bg-gray-300"></div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <NavLink id="footer-logo" to="/" onClick={goTo("/", "home")}>
            <img
              src={footerIcon}
              alt="Techty Icon"
              className="w-24 text-white"
            />
          </NavLink>

          <div className="grid grid-cols-4 gap-2">
            {/* External links stay as-is (no scroll handler) */}
            <NavLink
              to="https://x.com/donrealex1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://www.facebook.com/donrealex1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://instagram.com/donrealex001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </NavLink>
            <NavLink
              to="https://github.com/donrealex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="text-2xl" />
            </NavLink>
          </div>

          <p className="text-sm mt-4">
            Copyright © {new Date().getFullYear()} Techty.
            <br /> All Rights Reserved
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <p className="font-bold text-xl">Quick Links</p>
          <div className="flex flex-col gap-2">
            <NavLink id="footer-home" to="/" onClick={goTo("/", "home")}>
              Home
            </NavLink>
            <NavLink
              id="footer-about"
              to="/about"
              onClick={goTo("/about", "about")}
            >
              About
            </NavLink>
            <NavLink
              id="footer-service"
              to="/service"
              onClick={goTo("/service", "service")}
            >
              Service
            </NavLink>
            <NavLink
              id="footer-contact"
              to="/contact"
              onClick={goTo("/contact", "contact")}
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <p className="font-bold text-xl">Social</p>
          <div className="flex flex-col gap-2">
            <NavLink to="//x.com/donrealex1">Twitter</NavLink>
            <NavLink to="//linkedin.com/in/adebiyi-ridwan-b09705232/">
              LinkedIn
            </NavLink>
            <NavLink to="//facebook.com/donrealex">Facebook</NavLink>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-5 items-center lg:items-start">
          <p className="font-bold text-xl">Our Newsletter</p>
          <p className="text-center lg:text-left">
            Subscribe to our newsletter to
            <br />
            get our news delivered to you.
          </p>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-4 py-3 pr-28 ring ring-[#F0F8FF] rounded-lg"
            />
            <Button
              name="join"
              style="absolute top-1/2 right-2 -translate-y-1/2 bg-black rounded-md text-white px-4 py-2 hover:bg-[#28D09A] transition duration-300"
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;