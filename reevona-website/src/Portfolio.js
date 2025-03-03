import React, { useState, useEffect } from "react";
import website1 from './assets/portfolio_images/website1.jpg';
import website2 from './assets/portfolio_images/website2.jpg';
import website3 from './assets/portfolio_images/website3.jpg';
import website4 from './assets/portfolio_images/website4.jpg'
import website5 from './assets/portfolio_images/website5.jpg'
import website6 from './assets/portfolio_images/website6.jpg'

const slides = [
    {
        id: 1,
        title: "Zello Realestate",
        image: website1,
    },

    {
        id: 2,
        title: " Hoommio",
        image : website2,
    },

    {
        id: 3,
        title: "Homy",
        image: website3,
    },

    {
        id: 4,
        title: "Best House",
        image: website4,
    },

    
    {
        id: 5,
        title: "Interior Design Company",
        image: website5,
    },

    {
        id: 6,
        title: "Luxury Real Esate",
        image: website6,
    },

    {
        id: 7,
        title: "FinHome ShortLet Apartments",
        image: "/Images/FinHomePage.jpg",
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
                                        <span className="icon">🔗</span>
                                        <span className="icon">🔍</span>
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