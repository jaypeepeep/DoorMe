import React from 'react'
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'


const Socials = () => {
  return (
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
  )
}

export default Socials
