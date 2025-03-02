import React, {useEffect} from "react";
import scrollreveal from "scrollreveal";

const About = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
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
                        <b>Reevona</b> is a world class Web Design and Development Agency located in PortHacourt, Nigeria.
                        At <b>Reevona</b>, we are more than just a tech company—we’re your partners in driving business growth
                        and innovation. Founded on the principles of creativity, trust, and excellence, Reevona specializes in
                        web and app development, graphic design, and web3 solutions. Our mission is to transform businesses by
                        crafting solutions that elevate their digital presence, help them dominate their markets, triple their
                        sales, and drive sustainable growth. At <b>Reevona</b>, we don’t just build websites and apps—we create
                        growth engines for your business.
                    </p>
                </div>

                <div className="about_img">
                    <div className="about_img-overlay">
                        <img className="about_img-one" src="./Images/AboutUsImage.jpg" alt="About us" />
                    </div>

                    <div className="about_img-overlay">
                        <img className="about_img-two" src="./Images/AboutUsImage.jpg" alt="About us" />
                    </div>
                </div>

                <p className="about_data"><i>At Reevona, we don't just build websites and apps,
                we create growth engines for your business.</i>
                </p>
            </div>

        </section>

    );

};



export default About;