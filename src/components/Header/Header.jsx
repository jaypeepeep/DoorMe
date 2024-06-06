import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../logo/Logo';

class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className='mcontainer'>
                <img src="#" alt="logo" className='logo' />
                <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                    <li>
                        <NavLink exact="true" to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Find Dorms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            How It Works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Post My Property
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
