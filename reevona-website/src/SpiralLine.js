import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpiralLine = () => {
    const spiralRef = useRef(null);

    useEffect(() => {
        const spiral = spiralRef.current;

        gsap.fromTo(
            spiral,
            { strokeDashoffset: 1800 },
            {
                strokeDashoffset: -1800,
                ease: "power1.out",
                scrollTrigger:
                {
                    trigger: spiral,
                    start: "top center",
                    end: "bottom top",
                    scrub: 2,
                },
            }
        );
    }, []);

    return (
        <div className="spiral-container">
            <svg
                ref={spiralRef}
                className="spiral-line"
                width="700"
                height="5000"
                viewBox="0 0 700 5000"
                fill="none"
                xmlns="http://www.w3.org/2000/svg" >

                <path d="M150 0, 
                Q200 200, 150 400 
                T150 800,
                Q200 1000, 150 1200
                T150 1600
                Q200 1800, 150 2000"
                    stroke="#046C2D"
                    strokeWidth="2"
                    strokeDasharray="10,10"
                    fill="transparent" />
            </svg>
        </div>);
};

export default SpiralLine;