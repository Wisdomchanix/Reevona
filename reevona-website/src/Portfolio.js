import React, { useState, useEffect } from "react";
import website1 from './assets/portfolio_images/website1.jpg';
import website2 from './assets/portfolio_images/website2.jpg';
import website3 from './assets/portfolio_images/website3.jpg';
import website4 from './assets/portfolio_images/website4.jpg';
import website5 from './assets/portfolio_images/website5.jpg';
import website6 from './assets/portfolio_images/website6.jpg';

const slides = [
    {
        id: 1,
        title: "Cwlagos Realestate",
        image: website1,
        link : "https://cwlagos.com",
    },

    {
        id: 2,
        title: "Dream Estate Lekki",
        image : website2,
        link : "https://dreamestatelekkiltd.ng/?gad_source=1&gbraid=0AAAAA-5BR1rAwRxRTtDTe0k_cHTY9qQsu",
    },

    {
        id: 3,
        title: "Homy",
        image: website3,
        link : "https://dradrockng.com",
    },

    {
        id: 4,
        title: "Shortlet homes",
        image: website4,
        link: "Shortlethomeshttps://www.shortlethomes.netShortlethomes: Short Let Apartments in Lekki and Prime Locations in Lagos",
    },

    
    {
        id: 5,
        title: "Gidistays",
        image: website5,
        link : "https://gidistays.com/",
    },

    {
        id: 6,
        title: "Luxury Real Esate",
        image: website6,
        link : "https://havilahrealestateng.com/advantages-of-investing-in-short-let-apartments-in-nigeria/",
    },

    {
        id: 7,
        title: "FinHome ShortLet Apartments",
        image: "/Images/FinHomePage.jpg",
        link : "https://www.shortletrentals.com"
    },

];

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (

        <div className="portfolio_section section" id ="portfolio">
            <div className="portfolio_container container">
                <h1 className="section_title">Our Work Speaks For Itself</h1>
                <div className="slider">

                    <button className="arrow left" onClick={prevSlide}>&#10094;</button>

                    <div className="slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="slide">
                                <img src={slide.image} alt={slide.title} className="slide-image" loading = "lazy" />
                                <div className="overlay">
                                    <div className="icons">
                                        <a href= {slide.link} target="_blank" rel="noopener noreferrer"><span className="icon">🔗</span></a>
                                        <a href= {slide.link} target= "_blank" rel="noopener noreferrer"><span className="icon">🔍</span></a>
                                    </div>

                                    <h3 className="slide-title">{slide.title}</h3>
                                </div>
                            </div>
                        ))}

                    </div>

                    <button className="arrow right" onClick={nextSlide}>&#10095;</button>
                </div> <button className="view-button button">View More Projects</button>
            </div>

        </div>
    );
};
export default Portfolio;