import React, { useState } from 'react';
import generalIcon from './assets/Faq general.png';
import websiteDevIcon from './assets/Faq website.png';
import servicesIcon from './assets/Faq services.png';
import supportIcon from './assets/Faq support.png';

const categories = [
    {
        name: 'General Questions',
        icon: generalIcon,
        questions:
            [
                { question: 'What does Revvona do?', answer: 'Reevona builds high-converting websites and digital solutions designed to help real estate and short-let businesses attract more clients and grow their revenue.' },
                { question: 'Who are your services for?', answer: 'We work with real estate businesses, realtors, shortlet apartment providers, property managers, and companies looking to establish a strong digital presence and convert more leads.' },
                { question: 'Why do I need a website when I have social media ?', answer: 'Absolutely. Social media is great for engagement, but a professional website builds trust, showcases your properties in detail, and helps you appear on Google when potential clients search for apartments or real estate services. With a website, you control your brand experience, generate more qualified leads, and secure more bookings even while you sleep.' },
            ],
    },

    {
        name: 'Website Development',
        icon: websiteDevIcon,
        questions: [
            { question: 'How much does a website cost?', answer: 'Pricing depends on the complexity of your project and features required. Contact us for a free quote tailored to your business goals.' },
            { question: 'How long does it take to build a website?', answer: 'Most real estate and short-let websites take between 2–6 weeks, depending on your specific requirements and the number of listings.' },
            { question: 'Can I update my website myself after it’s built?', answer: 'Yes! We deliver user-friendly websites with simple dashboards, and we can train you on how to update listings, manage bookings, and make edits with ease.' },
        ],
    },

    {
        name: 'Other Services',
        icon: servicesIcon,
        questions: [
            { question: 'Do you offer branding and design services?', answer: 'Defintely. We provide branding, UI/UX design, and graphic design services to help your real estate or short-let brand stand out and remain memorable.' },
        ],
    },

    {
        name: 'Process & Support',
        icon: supportIcon,
        questions: [
            { question: 'How do I get started?', answer: 'It’s simple. Send us a message or visit our website to book a free consultation. We’ll discuss your business goals and recommend the best digital solution for you.' },
            { question: 'Do you provide support after the website is launched?', answer: 'Yeah. We offer ongoing maintenance and support plans to ensure your website runs smoothly, stays updated, and continues to perform at its best.' },
            { question: 'What if I don’t know what I need?', answer: 'No worries! We’ll guide you through the process, recommend the best features for your business, and help you make informed decisions to maximize your results.' },
        ],
    },

];


const Faq = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <section className="section faq_section" id ="faq">
              <div className="top_banner">
                    <h1 className="section_title faq_title">Do You Have Any Questions? </h1>
                    <p className="banner_description">Find answers to common questions about Revvona's services below.</p>
                </div>
            <div className="faq-container container">
                <div className="faq-tabs">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className= {`faq-tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(index);
                            }}
                        >
                            <img src={category.icon} alt={category.name} className = "faq_img" />
                            <p>{category.name}</p>
                            {activeTab === index && <span className="tab_arrow"> <img src="/Images/Tab arrow.png" alt="" className="tab_arrows" /></span>}
                        </div>
                    ))}
                </div>
                <div className="faq-accordion">
                    {categories[activeTab].questions.map((q, index) => (
                        <div
                            key={index}
                            className={`faq-item ${expandedIndex === index ? 'active' : ''}`}
                            onClick={() => handleExpand(index)}
                        >
                            <div className="faq-question">
                                <p>{q.question}</p>
                                <span className = "faq_icon">{expandedIndex === index ? <img src="/Images/chevron-down.png" alt="arrow" className="faq_arrow" /> : <img src="Images/chevron-up.png" alt="arrow" className="faq_arrow" />}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{q.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
