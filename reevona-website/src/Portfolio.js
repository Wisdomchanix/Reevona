import React, { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        title: "Zello Realestate",
        image: "/Images/ZelloRealEstate.jpg",

    },

    {
        id: 2,
        title: " Solom Fintech ",
        image: "/Images/FintechHomePage.jpg",

    },

    {
        id: 3,
        title: "Blo Insurance Company",
        image: "/Images/InsuranceHomePage.jpg",

    },

    {
        id: 4,
        title: " DiloCash Fintech Company",
        image: "/Images/FintechHomePage2.jpg",

    },

    
    {
        id: 5,
        title: "Interior Design Company",
        image: "/Images/InteriorDesign.jpg",
    },

    {
        id: 6,
        title: " Law Firm",
        image: "/Images/LawHomePage.jpg",
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

        <div className="portfolio_section section" id = "portfolio">
            <div className="portfolio_container container">
                <h1 className="section_title">Our Work Speaks For Itself</h1>
                <div className="slider">

                    <button className="arrow left" onClick={prevSlide}>&#10094;</button>

                    <div className="slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="slide">
                                <img src={slide.image} alt={slide.title} className="slide-image" />
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