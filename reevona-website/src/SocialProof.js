import React, { useState, useEffect, useRef } from "react";
import scrollreveal from "scrollreveal";


const SocialProof = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 2500,
            delay: 300,
            reset: true,
        })


        sr.reveal(".left", { delay: 500, origin: 'left' })
        sr.reveal(".right", { delay: 500, origin: 'right' })
    }, [])

    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [hasStarted])

    useEffect(() => {
        if (hasStarted) {
            let start = 0
            const end = 100
            const duration = 3000
            const incrementTime = duration / end

            const timer = setInterval(() => {
                start += 1
                setCount(start)
                if (start === end) clearInterval(timer)
            }, incrementTime)

            return () => clearInterval(timer)
        }
    }, [hasStarted])

    return (
        <section ref={sectionRef} className="social_proof section" id = "testimonials">

            <div className="social_proof-container container">

                <div className="social_proof-data">
                    <h1 className="section_title"> Why Do {count} + leading businesses<br /> trust Reeevona?</h1>

                    <p className="socialProof_description">
                        Simple, We deliver solutions that solve our client's biggest problems.
                        At <b>Reevona</b>, we've helped <b>100+ businesses, startups,
                            and entrepreneurs</b> scale their digital presence with modern and engaging websites, apps,
                        and designs. Our proven strategies have driven{" "} <b>higher conversions, increased revenue,
                            and brand recognition</b> across various industries. Companies trust us because we deliver
                        <b>real results</b>, and we're ready to do the same for you.
                    </p>

                </div>


                <div className="social_cards">

                    <div className="testimonial-card main-card">
                        <img src="./Images/home.png" alt="Client" className="client-img" />
                        <div className="testimonial-content">
                            <h3>Our Happy Customer</h3>
                            <p>Reevona transformed our online presence. Our sales increased by 250% within three months!</p>
                            <span className="client-name">— Jennifer K.</span>
                            <div className="stars">★★★★★</div>
                        </div>
                    </div>

                    <div className="testimonial-card small-card top-left scale left">
                        <p>“Incredible team—our app is now faster and more user-friendly!”</p>
                        <span>— Wilson T.</span>
                    </div>

                    <div className="testimonial-card small-card bottom-right scale right">
                        <p>“Reevona’s designs helped us stand out and doubled our engagement rate.”</p>
                        <span>— Stephanie R.</span>
                    </div>

                    <div className="stat-card number scale right">
                        <p> <strong>4.9</strong> ★ Average Rating </p>
                    </div>

                    <div className="stat-card scale left">
                        <p> <strong>100+</strong> Satisfied Clients </p>
                    </div>

                </div>

            </div>

        </section>
    )
};
export default SocialProof;
