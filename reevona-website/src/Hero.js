import React, { useEffect } from 'react'
import scrollreveal from 'scrollreveal'


const Hero = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
            delay: 300, 
            reset: true,
        })


        sr.reveal(".home_data-title", { delay: 900})
    }, [])

    return (
        <section className="home section" id="home">
            <img src="./Images/Home.png" alt="Home" className="home_img" />

            <div className="home_container container grid">
                <div className="home_data">
                    <h1 className="home_data-title">
                        Unlock Your <br /> <b> Business Potential </b> <br /> With Revvona
                    </h1>

                    <div className="home_data-subtitle">
                        <p>
                            We create Websites, apps, and designs that triple your sales and
                            make your business dominate the market.
                        </p>
                    </div>

                    <a href="#home" className="button">
                        Get a Website.
                    </a>

                </div>
                <div className="home_social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="home_social-link">
                        <i class="ri-facebook-box-fill"></i>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="home_social-link">
                        <i class="ri-instagram-fill"></i>
                    </a>

                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="home_social-link">
                        <i class="ri-twitter-fill"></i>
                    </a>

                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="home_social-link">
                        <i class="ri-tiktok-fill"></i>
                    </a>
                </div>

                <div className="home_info">
                    <div>
                        <span className="home_info-title">View our Portfolio</span>
                        <a href="#portfolio" className="button button_flex button_link home_info-button">
                            More <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>


                    <div className="home_info-overlay">
                        <img src="./homeoverlay.jpg" className="home_info-img" alt="Home info" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
