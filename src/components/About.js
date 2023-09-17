import React from 'react'
import aboutImg from '../assets/hero.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-model">
            <img src={aboutImg} alt="about" />
            </div>
            <div className="about-text">
                <h3>-Benifits of Real estate App </h3><br></br>
                <h2>Exclusive Benifits<br></br> of Real Estate App</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium, minus id assumenda quibusdam suscipit porro impedit saepe magnam iure </p>
                
            </div>
        </div>
    )
}

export default About
