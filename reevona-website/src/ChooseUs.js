import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";

const ChooseUs = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 300,
            reset: true,
        })


        sr.reveal(".feature-box", { delay: 500, origin: 'bottom' })
        // sr.reveal(".box_2", { delay: 500, origin: 'left' })
    }, [])

    return (

        <section className="chooseUs_section section">

            <div className="wave_container">
                <svg class="wave-top" viewBox="0 0 1440 320">

                    <path fill="#E9CC44" fill-opacity="1"

                        d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,154.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160V0H0Z">

                    </path>

                </svg>
            </div>



            <div className="chooseUs_container container">
                <h1 className="section_title">Why Businesses Trust Reevona.</h1>

                <div className="feature-box box_1">
                    <img src="/Images/REVENUE-GROWTH.png" alt="Code Icon" className="feature-icon" />
                    <h2 className="section_subtitle feature-title">Proven Track Record</h2>
                    <p className="feature-description">We have a history of increasing client revenue through innovative solutions.</p>
                </div>

                <div className="feature-box box_2">
                    <img src="/Images/mordern-solution.png" alt="Code Icon" className="feature-icon" />
                    <h2 className="section_subtitle feature-title">Modern & Creative Solutions</h2>
                    <p className="feature-description">Tailored to your business needs, ensuring a competitive edge.</p>
                </div>

                <div className="feature-box box_3">
                    <img src="/Images/FAST-DELIVERY.jpg" alt="Code Icon" className="feature-icon" />
                    <h2 className="section_subtitle feature-title">Dedicated Support & Fast Delivery</h2>
                    <p className="feature-description">We prioritize your success with round-the-clock support and timely execution.</p>
                </div>

            </div>

            <div class="wave-container">
                <svg class="wave-bottom" viewBox="0 0 1440 320">
                    <path fill="#E9CC44" fill-opacity="1"
                        d="M0,0L48,16C96,32,192,64,288,69.3C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160V320H0Z">
                    </path>
                </svg>
            </div>

        </section>
    );
};

export default ChooseUs;
