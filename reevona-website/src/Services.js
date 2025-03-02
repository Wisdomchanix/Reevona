import React, { useEffect, useState } from 'react';
import scrollreveal from 'scrollreveal';
import SpiralLine from './SpiralLine';

const Services = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2000,
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
            <h1 className="section_title">Our Services, Your Growth</h1>

            <div className="cards_container container">

                <div className="card card-1 show_card">
                    {/* <img src="./Images/services img.jpg" alt="Home" className="home_img" /> */}
                    <h2 className="section_subtitle">Website Development, Custom responsive websites designed to convert visitors into customers</h2>
                    <p className="card_description">Our web development service is designed to help businesses establish a strong online presence with modern, creative, and responsive websites tailored to their unique needs. We focus on delivering user-friendly designs, optimized for performance and search engine visibility, ensuring your site attracts more traffic. By leveraging innovative solutions, we help businesses convert visitors into customers, resulting in higher engagement and increased revenue. With Reevona, you can trust in a partner dedicated to growing your brand and tripling your sales through advanced web solutions.
                    </p>
                </div>

                <div className="card card-2 show_card">
                    <h2 className="section_subtitle">App Development Scalable, user-friendly  apps tailored to your audience </h2>
                    <p className="card_description">Our app development service focuses on creating innovative, user-friendly, and scalable mobile and web applications tailored to your business goals. We design apps that enhance user experience, improve engagement, and streamline processes, making it easier for your customers to interact with your brand. By providing a seamless and efficient app experience, we help businesses boost customer satisfaction, attract more users, and ultimately drive higher revenue. With Reevona, you gain a trusted partner committed to helping your business grow through revolutionary app solutions.</p>
                </div>

                <div className="card card-3 show_card">
                    <h2 className="section_subtitle">Graphics Design Eye-catching visuals that make your brand unforgettable</h2>
                    <p className="card_description">Reevona’s graphics design services are crafted to visually elevate your brand and leave a lasting impression on your audience. We create modern, eye-catching designs that communicate your message effectively, from logos and branding to marketing materials and social media graphics. Our designs are tailored to reflect your business identity, helping you stand out in a competitive market. By enhancing your brand’s visual appeal, we drive greater audience engagement, increase brand recognition, and ultimately contribute to higher sales. Reevona is your trusted partner for innovative design solutions that fuel growth and success.
                    </p>
                </div>

                <div className={`card card-4 hidden_card ${showAll ? "show" : ""}`}>
                    <h2 className="section_subtitle">Web Design Beautiful, intuitive  designs optimized for user experience</h2>
                    <p className="card_description">Reevona’s web design services are dedicated to creating visually stunning, user-friendly, and responsive websites that capture your brand’s essence. We focus on delivering designs that enhance user experience, improve navigation, and engage visitors effectively. By crafting unique and modern designs tailored to your business goals, we help you attract more traffic, build credibility, and convert visitors into loyal customers. With Reevona, your website becomes a powerful tool to boost brand visibility and drive higher revenue, ensuring your business stands out in a competitive digital landscape.
                    </p>
                </div>


                <div className={`card card-5 hidden_card ${showAll ? "show" : ""}`}>
                    <h2 className="section_subtitle">Web3 Development Innovative blockchain solutions to future-proof your business</h2>
                    <p className="card_description">
                        Reevona’s web3 development services harness the power of blockchain technology to build decentralized, secure, and scalable solutions for your business. Whether it’s smart contracts, decentralized apps (dApps), or NFT platforms, we create advanced web3 products tailored to your needs. By embracing web3, your business gains a competitive edge through increased transparency, enhanced user trust, and innovative customer experiences. With Reevona, you can unlock new opportunities in the digital economy, attract forward-thinking customers, and drive growth in a rapidly evolving market.
                    </p>
                </div>

                <div className="servicesButton_container">
                    <button className="services_btn" onClick={toggleServices}>
                        <span> {showAll ? "Show Less" : "View All Services"}</span>
                        <i class="ri-arrow-right-line services_arrow"></i>
                    </button>
                </div>

            </div>
        </section>);
}; export default Services;
