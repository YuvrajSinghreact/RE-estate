import React from 'react'

const PropertyBox = ({ image, title, price }) => {
    return (
        <div className="propartybox">
            <img src={image} alt={title} />
            <p>{title}</p>
            <a href="/" className="price">{price}</a>
            <a href="/" className="buy">Aqua Vista</a>
            <h4>Aqua Vista Designer Home</h4>
        </div>
    )
}

export default PropertyBox
