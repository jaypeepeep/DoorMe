import React from 'react'
import Logo from '../logo/Logo'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className="px-[10%] font-montserrat bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/5 px-4 mb-8 gap-10">
            <Logo/>
            <p className="text-gray-700 mb-4 mt-4">
              Nam posuere accumsan porta integer id orci sed ante tincidunt et amet sed libero.
            </p>
            <p className="text-gray-600">© AnoNameNatin 2024</p>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">RENTING</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Browse Rentals</a></li>
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">How It Works</a></li>
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Post My Property</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">About Us</a></li>
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Safety Guidelines</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8">
            <h4 className="text-lg font-bold mb-4 text-[#311B92]">LEGAL</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Terms of Service</a></li>
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Privacy Policy</a></li>
              <li><a className="text-gray-700 hover:text-[#311B92] cursor-pointer">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8">
            <ul className="flex flex-wrap -mx-2">
              <li className="w-1/2 sm:w-1/4 px-2 mb-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                  <img src={Facebook} alt="Facebook" className="w-10 h-10" />
                </a>
              </li>
              <li className="w-1/2 sm:w-1/4 px-2 mb-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                  <img src={Linkedin} alt="Linkedin" className="w-10 h-10" />
                </a>
              </li>
              <li className="w-1/2 sm:w-1/4 px-2 mb-4">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                  <img src={Twitter} alt="Twitter" className="w-10 h-10" />
                </a>
              </li>
              <li className="w-1/2 sm:w-1/4 px-2 mb-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                  <img src={Instagram} alt="Instagram" className="w-10 h-10" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;