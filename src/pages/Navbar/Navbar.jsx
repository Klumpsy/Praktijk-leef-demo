import React from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css";
import { BsInstagram } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai";

function Navbar() {
    return (
        <nav className="navbar-container">
            <Link to="/">
                <h1 className="navbar-logo">Praktijk Leef!</h1>
            </Link>
            <div className="navbar-links-container">
                <Link to="/Aanbod">
                    Aanbod
                </Link>
                <Link to="/Werkwijze">
                    Werkwijze
                </Link>
                <Link to="/Bekwaamheden">
                    Opleiding/trainingen
                </Link>
                <Link to="/Tarieven">
                    Tarieven
                </Link>
                <Link to="/Contact">
                    Contact
                </Link>
            </div>
            <div className="navbar-socials">
                <a className="navbar-socials-instagram" href="https://www.instagram.com/rianne.jurgensveldsink/?hl=nl" target="_blank">
                    <BsInstagram size={30} />
                </a>
                <a className="navbar-socials-email" href="mailto:praktijkleef@outlook.com?subject=Contact met Praktijk leef&body= Dag Rianne,">
                    <AiOutlineMail size={30} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
