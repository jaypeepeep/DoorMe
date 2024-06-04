import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <nav className='container'>
                <img src="#" alt="logo" className='logo' />
                <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                    <li>
                        <NavLink exact="true" to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
