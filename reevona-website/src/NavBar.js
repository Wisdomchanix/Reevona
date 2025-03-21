import React, { useState, useEffect } from "react";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(window.location.hash || "#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            let currentSection = "#home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    currentSection = `#${section.id}`;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav navbar">
                <a href="#home" className="nav_logo">
                    <img src="/Reevona-logo.png" alt="Reevona logo" className="logo" />
                </a>

                <div className={`nav_menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav_list">
                        {[
                            { name: "Home", hash: "#home" },
                            { name: "Testimonials", hash: "#testimonials" },
                            { name: "About Us", hash: "#about" },
                            { name: "Services", hash: "#services" },
                            { name: "Portfolio", hash: "#portfolio" },
                            { name: "Contact Us", hash: "#contact" },].map((item) => (
                                <li className="nav_item" key={item.hash}>
                                    <a
                                        href={item.hash}
                                        className={`nav_link ${activeSection === item.hash ? "active-link" : ""}`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
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
