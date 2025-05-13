import React from 'react'

const TandC = () => {
    return (
        <section id="Terms" className = "terms section">
            <div className="terms_container">
                <h1 className="section_title">Terms and Conditions</h1>
                <h2 className="section_subtitle">Effectice Date: January 2024 </h2>

                <p className="intro-text">
                    <b>
                        Welcome to Reevona. By using our website and services, you agree to the terms below.
                        Please read them carefully. If you do not agree, kindly refrain from using our platform.
                    </b>
                </p>

                <div className="term_div">
                    <h2 className="section_subtitle">About Us</h2>

                    <p>
                        Reevona is a digital service provider offering web design,
                        app development, branding, and related digital solutions.
                        We help businesses build their online presence with creativity and innovation.
                    </p>
                </div>

                <div className="term_div">
                    <h2 className="section_subtitle">Use Of Our Services</h2>

                    
                    <ul>
                        <li> You must be at least 16 years old to use our services.</li>
                        <li>You agree to use our services only for lawful purposes.</li>
                        <li>You may not copy, resell, or exploit any part of our services or content without our written permission. </li>
                    </ul>
                </div>


            </div>

        </section>
    )
}

export default TandC
