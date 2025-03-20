import React, { useState, useEffect } from "react";
import scrollUpImage from './assets/scrollupIcon.png'; 

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-up-btn">
                    <img src={scrollUpImage} alt="Scroll to top" />
                </button>
            )}
        </div>
    );
};

export default Scroll;

