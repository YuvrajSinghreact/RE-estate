import React from 'react'
import logo from '../assets/logo1.png'

const Navbar = () => {
    return (
        <nav>
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
            <input 
                type="checkbox" 
                className="menu-btn" 
                id="menu-btn" 
            />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">How It Works</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Testimonial</a></li>
            </ul>
            <a href="/" className="property">Get The App</a>
        </nav>
    )
}

export default Navbar
