import React from 'react'
import AgentBox from './AgentBox'
import agent1 from '../assets/fic.jfif'
import agent2 from '../assets/fic.jfif'
import agent3 from '../assets/fic.jfif'

const Agents = () => {
    return (
        <div className="agent">
            <div className="agent-heading">
                <h3>-Expert Agents</h3>
                <h2>Your Expert In<br></br>
                    Real Estate</h2> 
            </div>
            <div className="agent-container">
                <AgentBox image={agent1} title="Ayan Roy" />
                <AgentBox image={agent2} title="Sayan Ghosh" />
                <AgentBox image={agent3} title="Raman Saha" />
            </div>
        </div>
    )
}

export default Agents
