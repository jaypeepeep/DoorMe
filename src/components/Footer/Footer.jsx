// src/components/footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Socials from "../icons/Socials";

const Footer = () => {
  return (
    <footer className="px-[10%] font-poppins bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          <div className="w-full md:w-1/3 px-1 mb-8 gap-10 text-center md:text-left">
            <Logo />
            <p className="text-gray-700 mb-4 mt-4">
              Discover the dorm you will love to call home
              with DoorMe 
            </p>
            <p className="text-gray-600">© DoorMe 2024</p>
          </div>
          <div className="w-full md:w-1/5 px-1 mb-8 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">RENTING</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Login"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Browse Rentals
                </Link>
              </li>
              <li>
                <Link
                  to="/HowItWorks"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  to="/Login"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Post My Property
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-1 mb-8 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/About"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/SafetyGuidelines"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-1 mb-8 text-center md:text-left">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/TermsOfService"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/CookiePolicy"
                  className="text-gray-700 hover:text-[#311B92] cursor-pointer"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full px-2 mb-8 text-center justify-center md:text-left">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;