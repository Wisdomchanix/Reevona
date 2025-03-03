import { useState } from "react";
import { motion } from "framer-motion";

const RiskSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const risks = [
        {
            title: "Loss of Credibility",
            description:
                "Ever searched for a business online and found… nothing? Feels sketchy, right? Having no website makes your business look outdated and untrustworthy.",
        },

        {
            title: "Limited Customer Reach",
            description:
                "Imagine owning a store that no one can find. That’s what happens  when you don’t have a website! With over 5 billion people online, your potential customers are searching for businesses like yours.",
        },

        {
            title: "Missed Revenue Opportunities",
            description: "Your business could be making money while you sleep—but only if you’re online.A website allows customers to book, buy, or contact you 24/7.",
        },
    ];


    const hiddenRisks = [

        {
            title: "Weaker Brand Presence",
            description:
                "Your brand is more than just a logo—it’s the way people see and remember you.Without a website, you’re giving competitors a chance to own the conversation online.",
        },

        {
            title: "Dependence on Social Media",
            description:
                "Social media platforms change algorithms, limit reach, or even ban accounts overnight.A website gives you full control—your business, your rules.",
        },

        {
            title: "Lack of Customer Trust",
            description:
                "Would you trust a business that has no online presence? A website builds trust by providing clear information, reviews, and proof that your business is real.",
        },

        {
            title: "Competitive Disadvantage",
            description: "Your competitors are online—and they’re getting your potential customers. A website helps you stay ahead by showcasing your expertise and services.",
        },

    ];


    return (
        <section className="risk-section section">
            <div className="risk_title-container">
                <h1 className="section_title risk_title">Can Your Business Afford to Stay the Same?</h1>
            </div>
            <div className="risk_container container">
                <p className="intro-text">
                    <b>
                        The first step in increasing business successfully is to make sure your clientele can
                        locate your company quickly and easily...
                    </b>
                </p>
                <div className="risks-container">
                    {risks.map((risk, index) => (
                        <div key={index} className="risk-card">
                            <div className="corner service_topLeft"></div>
                            <div className="corner service_bottomRight"></div>
                            <h3>{risk.title}</h3>
                            <p>{risk.description}</p>
                        </div>
                    ))}

                    {/* Accordion for hidden risks */}

                    {/* <button
                        className="dropdown-btn"
                        onClick={() => setIsOpen(!isOpen)}> {isOpen ? "Show Less" : "See More Risks"}
                    </button> */}
                    <motion.div
                        className="accordion"
                        initial={{ height: 0, opacity: 0 }}
                        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }} >

                        {hiddenRisks.map((risk, index) => (
                            <div key={index} className="risk-card">
                                <div className="corner service_topLeft"></div>
                                <div className="corner service_bottomRight"></div>
                                <h3>{risk.title}</h3>
                                <p>{risk.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Buttons */}

                <div className="cta_container">
                    <button
                        className="dropdown-btn"
                        onClick={() => setIsOpen(!isOpen)}> {isOpen ? "Hide Risks" : "See More Risks"}
                    </button>
                    <a href="/contact" className="cta-btn">Take the First Step Now</a>
                </div>
            </div>
        </section>
    );
};

export default RiskSection; 