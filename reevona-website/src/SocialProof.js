import React, { useState, useEffect, useRef } from "react";
import scrollreveal from "scrollreveal";


const SocialProof = () => {

    useEffect(() => {
        const sr = scrollreveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1500,
            delay: 300,
            reset: true,
        })


        sr.reveal(".left", { delay: 300, origin: 'left' })
        sr.reveal(".right", { delay: 300, origin: 'left' })
        sr.reveal(".socialProof_img", { delay: 300, origin: 'left' })
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
        <section ref={sectionRef} className="social_proof section" id="testimonials">

            <div className="social_proof-container container">

                <div className="social_proof-data">
                    <h1 className="section_title"> Why Do {count} + leading businesses<br /> trust Revvona?</h1>

                    <p className="socialProof_description">
                        Revvona delivers <b>real results.</b> We’ve helped 100+ businesses especially in <b>real estate
                            and shortlets boost </b>their digital presence with modern websites, apps, and designs.
                        Our strategies drive <b>higher bookings, increased revenue, and stronger brand recognition.</b>
                        Ready to scale? Let’s make it happen.
                    </p>

                </div>


                <div className="socialProof_img">
                    <img src="/Images/socialproof.PNG" alt="About Us" className="sp_img" />
                </div>

            </div>

        </section>
    )
};
export default SocialProof;
