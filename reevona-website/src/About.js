import React, {useEffect} from "react";
import scrollreveal from "scrollreveal";

const About = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 150,
            reset: true,
        })


        sr.reveal(".about_section", { delay: 200})
    }, [])

    return (
        <section className="about_section section" id="about">
            <div className="about_container container grid">

                <div className="about_data">
                    <h1 className="section_title about_title">Who are We</h1>
                    <p className="about_description"> 
                        Revvona is a top-tier <b>web design and development agency</b> in Port Harcourt, Nigeria, 
                        specializing in websites, apps, and branding. We help <b>real estate and shortlet businesses
                        dominate their market, increase bookings, and drive sustainable growth</b>. More than just a 
                        tech company we’re your partner in success.
                    </p>
                </div>

                <div className="about_img">
                    <div className="about_img-overlay">
                        {/* <img className="about_img-one" src="./AboutUsImage.jpg" alt="About Image"/> */}
                        <img src="/Images/AboutImg2.jpg" alt="About Us Image" className="about_img-one" />
                    </div>

                    <div className="about_img-overlay">
                        <img src="./Images/AboutImg.jpg" alt="About Us Image" className ="about_img-two"/>
                    </div>
                </div>

                <p className="about_data"><i>At Revvona, we don't just build websites and apps,
                we create growth engines for your business.</i>
                </p>
            </div>

        </section>

    );

};



export default About;