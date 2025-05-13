import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        emailjs
            .send(
                "service_9qye9bz",
                "template_0wc5wko",
                formData,
                "W5FQKIatLzC3MfEMS"
            )
            .then((response) => {
                console.log("Email sent:", response);
                setSuccess(true);
                setPopup({ show: true, message: "Message sent successfully! We'll get back to you within 24hrs.", type: "success" });
            })
            .catch((error) => {
                console.error("Email error:", error);
                setPopup({ show: true, message: "Something went wrong. Try again.", type: "error" });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => setPopup({ show: false, message: "", type: "" }), 3000);
            });
    };

    return (
        <div className="contact-section"  id= "contact">
            <div className="contact-container container">
                <h2 className="contact-headline section_title">Get in Touch</h2>
                <p className="contact-intro">
                    Let's create a high-converting website for your short-let or real estate business.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                    <input type="text" name="company" placeholder="Company Name" required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
                    <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                    <select name="project" required onChange={handleChange} value={formData.projectType}>
                        <option value="">What type of project do you need?</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Branding/Design">Branding/Design</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea name="message" placeholder="Tell us about your bussiness and what you'd like to achieve " required onChange={handleChange}></textarea>

                    <button type="submit" className="submit-btn">
                        {loading ? <span className="loader"></span> : success ? <span className="checkmark">✓</span> : "Send Message"}
                    </button>
                </form>

                {popup.show && (
                    <div className={`popup ${popup.type === "success" ? "popup-success" : "popup-error"}`}>
                        <p>{popup.message}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactForm;


