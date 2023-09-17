import React from 'react'
import PropertyBox from './PropertyBox';

import pImage1 from '../assets/images.jfif'
import pImage2 from '../assets/hous.jfif'
import pImage3 from '../assets/house.jfif'
import pImage4 from '../assets/ho.jfif'
import pImage5 from '../assets/he.jfif'
import pImage6 from '../assets/hi.jfif'

const Proparty = () => {
    return (
        <div className="proparty">
            <div className="proparty-heading">
                <h3>-Best Deals</h3><br></br>
                <h2>POPULAR PROPERTY DEALS.</h2>
            </div>
            <div className="proparty-container">
                <PropertyBox image={pImage1} name="AWAS VIKAS" price="Rs.450,000"/>
                <PropertyBox image={pImage2} name="House 2" price="Rs.203,600"/>
                <PropertyBox image={pImage3} name="House 3" price="Rs.163,640"/>
                <PropertyBox image={pImage4} name="AWAS VIKAS" price="Rs.780,000"/>
                <PropertyBox image={pImage5} name="House 5" price="Rs.96,33,600"/>
                <PropertyBox image={pImage6} name="House 4" price="Rs.14,43,640"/>
            </div>
        </div>
    )
}

export default Proparty
