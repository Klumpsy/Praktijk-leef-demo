import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css";

import { Sling as Hamburger } from 'hamburger-react'
import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai";

//Logo
import logo from "../../media/images/praktijk-leef-logo.png";

function Navbar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [window.innerWidth])

    const closeWindow = () => {
        setMenuOpen(false);
    }

    return (
        <nav className="navbar-container">
            <Link to="/Praktijk-leef-demo/" onClick={closeWindow}>
                <div className="navbar-logo">
                    <img src={logo} />
                </div>
            </Link>
            <div className={width < 968 && menuOpen ? "navbar-links-container nav-toggled" : "navbar-links-container"}>
                <Link to="/Aanbod" onClick={closeWindow}>
                    Aanbod
                </Link>
                <Link to="/Werkwijze" onClick={closeWindow}>
                    Werkwijze
                </Link>
                <Link to="/Bekwaamheden" onClick={closeWindow}>
                    Opleiding/trainingen
                </Link>
                <Link to="/Tarieven" onClick={closeWindow}>
                    Tarieven
                </Link>
                <Link to="/Contact" onClick={closeWindow}>
                    Contact
                </Link>
            </div>
            <div className={width < 968 ? "hamburger-menu" : "hamburger-menu-close"}>
                {width < 968 && <Hamburger
                    toggled={menuOpen}
                    toggle={setMenuOpen}
                    onToggle={toggled => {
                        if (toggled) {
                            setMenuOpen(!menuOpen)
                        }
                    }}
                    color="white"
                    duration={1.0}
                />}
            </div>
            <div className="navbar-socials">
                <a className="navbar-socials-instagram" href="https://www.instagram.com/rianne.jurgensveldsink/?hl=nl" target="_blank">
                    <BsInstagram size={30} />
                </a>
                <a className="navbar-socials-email" href="mailto:praktijkleef@outlook.com?subject=Contact met Praktijk leef&body= Dag Rianne,">
                    <AiOutlineMail size={30} />
                </a>
                <a className="navbar-socials-whatsApp" href="https://wa.me/31682384442" target="_blank">
                    <BsWhatsapp size={30} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
