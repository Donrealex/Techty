import React from 'react'
import Button from './Button.jsx'
import { Link,  } from 'react-router-dom';




const Navbar = () => {

 const printMsg=() => {};

  return (
    <nav className="bg-[#F0F8FF] h-20 w-full flex items-center justify-between p-14 gap-10">
      <img src="/src/assets/techtyIcon.svg" alt="Techty Icon" />

      <div className="items-center justify-center flex gap-10">
        <Link to="/" className="  ">
          {" "}
          Home
        </Link>
        <Link to="/About" className="  ">
          {" "}
          About
        </Link>
        <Link to="/Service" className="  ">
          {" "}
          Service
        </Link>
        <Link to="/Blog" className="  ">
          {" "}
          Blog
        </Link>
        <Link to="/Contact" className="  ">
          {" "}
          Contact
        </Link>
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
}

export default Navbar