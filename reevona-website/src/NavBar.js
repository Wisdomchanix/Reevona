import React, { useState } from "react";
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header" id="header">
            <nav className="nav navbar">
                <a href="#home" className="nav_logo">Travel</a>
                <div className={`nav_menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav_list">
                        <li className="nav_item"><a href="#home" className="nav_link active-link">Home</a></li>
                        <li className="nav_item"><a href="#about" className="nav_link">About</a></li>
                        <li className="nav_item"><a href="#discover" className="nav_link">Discover</a></li>
                        <li className="nav_item"><a href="#place" className="nav_link">Place</a></li>
                    </ul>
                    <div className="nav_dark">
                        <span className="change-theme-name">Dark Mode</span> <i className="ri-moon-line change-theme" id="theme-button"></i>
                    </div>
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
