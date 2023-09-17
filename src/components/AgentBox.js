import React from 'react'

const AgentBox = ({ image, title }) => {
    return (
        <div className="agentbox">
            <div className="agentbox-img">
                <img src={image} alt={title} />
            </div>
            <div className="agentbox-text">
                <h3>{title}</h3>
                
            </div>
        </div>
    )
}

export default AgentBox
