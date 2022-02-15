import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                &copy; 2022 Praktijk Leef!
            </p>
            <div>
                <Link to="/Contact">Contact</Link>
            </div>
            <p>
                Powered By: Bart Klumpers
            </p>
        </div>
    )
}

export default Footer
