import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="intro">
                <p><b>- The Best Real Estate Mobile App</b></p>
                <h1>
                    <span>Your Ultimate</span> Real Estate
                    <span> Partner </span>
                              
                    
                </h1>
                <p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis saepe odio voluptatem quidem illum cum quae quo amet repellat.</p>
                <a href="/" className="header-btn">GET IT ON <br></br>PLAY STORE</a>
            </div>
        </div>
    )
}

export default Header
