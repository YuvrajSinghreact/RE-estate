import React from 'react'
import About from './components/About'
import Agents from './components/Agents'
import Contact from './components/Contact'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Proparty from './components/Proparty'
import Footer from './components/Footer'


import './styles/app.scss'

const App = () => {
    return (
        
        <div>
            <Header />
            <HowItWorks />
            <About />
            <Agents />
            <Proparty />
            <Contact />
            <Footer />
            
            
        </div>
    )
}

export default App
