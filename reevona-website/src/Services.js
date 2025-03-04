import React, { useEffect, useState } from 'react';
import scrollreveal from 'scrollreveal';
import SpiralLine from './SpiralLine';
import { motion } from "framer-motion";

const Services = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 150,
            reset: true,
        })


        sr.reveal(".show_card", { delay: 200 })
        // sr.reveal(".hidden_card", { delay: 200, origin: "top"  })
    }, [])

    const [showAll, setShowAll] = useState(false);

    const toggleServices = () => {
        setShowAll(!showAll);
    }

    return (
        <section className="services_section section" id="services">
            <SpiralLine />

            <div className="cards_container container">
                <h1 className="section_title">Our Services, Your Growth</h1>

                <div className="card card-1 show_card">
                    <i class="ri-macbook-line service_icon"></i>
                    <h2 className="section_subtitle">Website & App Development</h2>
                    <p className="card_description">
                        We build high performance websites and apps that attract clients and boost bookings.
                    </p>
                </div>

                <div className="card card-3 show_card">
                    <i class="ri-palette-line service_icon"></i>
                    <h2 className="section_subtitle">UI/UX Design</h2>
                    <p className="card_description">
                        Engaging, user-friendly designs that enhance customer experience and trust.
                    </p>
                </div>

                <div className="card card-4 " >
                    <i class="ri-pen-nib-fill service_icon"></i>
                    <h2 className="section_subtitle">Graphic Design </h2>
                    <p className="card_description">
                        Standout branding and marketing materials tailored for real estate and shortlet business.
                    </p>
                </div>

                <motion.div
                    className="hidden_card"
                    initial={{ height: 0, opacity: 0 }}
                    animate={showAll ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} >

                    <div className="card card-5 ">
                        <h2 className="section_subtitle">Web3 Development</h2>
                        <p className="card_description">
                            Secure, blockchain powered solutions for the future of digital transactions.
                        </p>
                    </div>
                </motion.div>


                <div className="servicesButton_container">
                    <button className="services_btn" onClick={toggleServices}>
                        <span> {showAll ? "Show Less" : "View All Services"}</span>
                        <i class="ri-arrow-right-line services_arrow"></i>
                    </button>
                </div>

            </div>
        </section>);
}; export default Services;
