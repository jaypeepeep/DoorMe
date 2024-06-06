import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';

class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className="w-full flex fixed top-5 items-center justify-between z-10 transition duration-300 ease-in-out px-[10%] py-1">
                <Link to="/">
                    <div className="w-40 cursor-pointer hover:scale-110 transition duration-500 ease-in-out">
                        <Logo />
                    </div>
                </Link>
                <ul className="flex-1 list-none text-right">
                    <li className="inline-block mx-5 text-base font-bold font-sans cursor-pointer">
                        <NavLink
                            exact="true"
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#651FFF]'
                                    : 'text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out'
                            }
                        >
                        </NavLink>
                    </li>
                    <li className="inline-block mx-5 text-base font-bold font-sans cursor-pointer">
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#651FFF]'
                                    : 'text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out'
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="inline-block mx-5 text-base font-bold font-sans cursor-pointer">
                        <NavLink
                            to="/FindDorms"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#651FFF]'
                                    : 'text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out'
                            }
                        >
                            Find Dorms
                        </NavLink>
                    </li>
                    <li className="inline-block mx-5 text-base font-bold font-sans cursor-pointer">
                        <NavLink
                            to="/HowItWorks"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#651FFF]'
                                    : 'text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out'
                            }
                        >
                            How It Works
                        </NavLink>
                    </li>
                    <li className="inline-block mx-5 text-base font-bold font-sans cursor-pointer">
                        <NavLink
                            to="/PostProperty"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-[#651FFF]'
                                    : 'text-gray-800 hover:text-[#651FFF] transition duration-300 ease-in-out'
                            }
                        >
                            Post My Property
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;