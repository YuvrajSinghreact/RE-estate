import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <p>
                Copyright &copy; {year} by 
               
                . Copyright @2023 Re-estate. All right reserved 
            </p>
        </div>
    )
}

export default Footer