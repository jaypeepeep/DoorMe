import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import ClearButtonSmall from "../buttons/ClearButtonSmall";
import DarkButtonSmall from "../buttons/DarkButtonSmall";
import "./Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav
        className={`w-full flex fixed top-0 left-0 right-0 items-center justify-between z-10 transition duration-300 ease-in-out px-[10%] py-4 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <Link to="/">
          <div className="w-40 cursor-pointer hover:scale-110 transition duration-500 ease-in-out">
            <Logo />
          </div>
        </Link>
        <div
          className="sm:hidden flex flex-col justify-around h-6 w-6 cursor-pointer"
          onClick={handleClick}
        >
          <div
            className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
              clicked ? "transform rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
              clicked ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-800 transition duration-300 ease-in-out ${
              clicked ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
        <ul
          className={`${
            clicked ? "flex" : "hidden"
          } flex-col sm:flex-row sm:flex sm:items-center sm:justify-end flex-1 list-none text-right sm:text-left`}
        >
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#651FFF]"
                  : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
              }
            ></NavLink>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-[#651FFF]"
                  : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
              }
            >
              About
            </NavLink>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <NavLink
              to="/FindDorms"
              className={({ isActive }) =>
                isActive
                  ? "text-[#651FFF]"
                  : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
              }
            >
              Find Dorms
            </NavLink>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#651FFF]"
                  : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
              }
            >
              How It Works
            </NavLink>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <NavLink
              to="/PostProperty"
              className={({ isActive }) =>
                isActive
                  ? "text-[#651FFF]"
                  : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
              }
            >
              Post My Property
            </NavLink>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <ClearButtonSmall>
              {" "}
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#651FFF]"
                    : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
                }
              >
                Login
              </NavLink>
            </ClearButtonSmall>
          </li>
          <li className="sm:inline-block mx-5 text-base font-bold font-sans cursor-pointer">
            <DarkButtonSmall>
              {" "}
              <NavLink
                to="/Register"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#651FFF]"
                    : "text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out"
                }
              >
                Register
              </NavLink>
            </DarkButtonSmall>
          </li>
        </ul>
      </nav>
      <div className="mt-20"></div>
    </>
  );
};

export default Header;