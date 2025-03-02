import React, { useState } from "react";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header" id="header">
            <nav className="nav navbar">
                <a href="#home" className="nav_logo">
                    <img src="/Reevona-logo.png" alt="Reevona logo" className = "logo" />
                </a>
                <div className={`nav_menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#home" className="nav_link active-link">Home</a></li>
                        <li className="nav_item"><a href="#about" className="nav_link">About Us</a></li>
                        <li className="nav_item"><a href="#services" className="nav_link">Services</a></li>
                        <li className="nav_item"><a href="#portfolio" className="nav_link">Portfolio</a></li>
                        <li className="nav_item"><a href="#testimonials" className="nav_link">Testimonials</a></li>
                        <li className="nav_item"><a href="#contact" className="nav_link">Contact Us</a></li>
                    </ul>
                    <i className="ri-close-fill nav_close" onClick={() => setMenuOpen(false)}></i>
                </div>
                <div className="nav_toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>
    );
};
export default NavBar;
