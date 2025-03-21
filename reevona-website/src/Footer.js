import React from "react";

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="footer_container container grid">
                <div className="footer_content">
                    <h3 className="footer_title">Our information</h3>
                    <ul className="footer_list">
                        <li>Port Harcourt</li>
                        <li>Rivers State 500001</li>
                        <li>07063604975</li>
                        <li>Reevonainfo@gmail.com</li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Help</h3>
                    <ul className="footer_links">
                        <li>
                            <a href="#" className="footer_link">Terms and Services</a>
                        </li>
                        <li>
                            <a href="#" className="footer_link">Customer Support</a>
                        </li>
                        <li>
                            <a href="#faq" className="footer_link">FAQS</a>
                        </li>
                        <li>
                            <a href="#" className="footer_link">Privacy Policy</a>
                        </li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Quick Links</h3>
                    <ul className="footer_links">
                        <li>
                            <a href="#home" className="footer_link">Home</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="footer_link">Testimonials</a>
                        </li>
                        <li>
                            <a href="#about" className="footer_link">About Us</a>
                        </li>
                        <li>
                            <a href="#services" className="footer_link">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer_link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer_link">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="footer_content">
                    <h3 className="footer_title">Social</h3>
                    <div className="footer_social">
                        <a href="https://www.instagram.com/revvona_?igsh=Yzc1dWtnNzU0emZz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer_social-link">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer_social-link">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/revvona_?igsh=Yzc1dWtnNzU0emZz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer_social-link">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <span className="footer_copy">&#169; Revvona. All rights reserved</span>
        </footer>
    );
};

export default Footer;