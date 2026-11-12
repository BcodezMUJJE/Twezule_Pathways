import React, { useState } from "react";
import { FaHandshake, FaUsers, FaStar, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaCheck } from "react-icons/fa";
import "./GetInvolvedStyles.css";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";

const SOCIAL_LINKS = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/twezule-pathways" },
    { name: "Facebook", href: "https://www.facebook.com/twezulepathways" },
    { name: "Instagram", href: "https://www.instagram.com/twezulepathways" },
];

const WAYS = [
    {
        id: "partner",
        icon: FaHandshake,
        title: "Partner with Us",
        text: "NGOs, local governments, and institutions can collaborate on programs or research. Together, we can amplify our impact and reach more communities.",
        points: ["Program collaboration opportunities", "Research partnerships", "Resource sharing initiatives", "Joint advocacy campaigns"],
        action: "Explore Partnership",
    },
    {
        id: "volunteer",
        icon: FaUsers,
        title: "Volunteer or Intern",
        text: "Support our field trainings, communications, or research. Share your skills and passion while gaining meaningful experience in grassroots development.",
        points: ["Field training facilitation", "Communications and storytelling", "Research and documentation", "Program support and coordination"],
        action: "Join Our Team",
    },
    {
        id: "champion",
        icon: FaStar,
        title: "Champion Twezule",
        text: "Share our story, connect us with networks or funders. Be our voice in your community and help us expand our reach to empower more women.",
        points: ["Share our story and mission", "Connect us with potential funders", "Introduce us to your networks", "Advocate for women's empowerment"],
        action: "Become a Champion",
    },
];

/* Scroll to the form and move keyboard focus to its heading */
function goToContactForm() {
    const section = document.getElementById("contact-form");
    const heading = document.getElementById("contact-form-title");
    if (!section) return;
    section.scrollIntoView();
    if (heading) heading.focus({ preventScroll: true });
}

const GetInvolved = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        }, 1000);
    };

    return (
        <div className="get-involved">
            {/* Header */}
            <header className="page-header">
                <div className="container">
                    <h1>Get Involved</h1>
                    <p className="lead">
                        Every woman deserves the opportunity to rise. You can be part of that journey.
                    </p>
                </div>
            </header>

            {/* Ways to Get Involved */}
            <section className="section" aria-labelledby="ways-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="ways-title">Ways to Get Involved</h2>
                        <p className="lead">
                            Join our mission to empower women and transform communities across Uganda
                        </p>
                    </div>

                    <div className="gi-ways">
                        {WAYS.map(({ id, icon: Icon, title, text, points, action }) => (
                            <article className="card gi-way" id={id} key={id}>
                                <span className="icon-mark" aria-hidden="true"><Icon /></span>
                                <h3>{title}</h3>
                                <p className="gi-way__text">{text}</p>
                                <ul className="check-list gi-way__list">
                                    {points.map((point) => <li key={point}>{point}</li>)}
                                </ul>
                                <button type="button" className="btn btn--secondary btn--block gi-way__action" onClick={goToContactForm}>
                                    {action}
                                </button>
                            </article>
                        ))}
                    </div>

                    {/* Donation */}
                    <div className="gi-donate">
                        <div>
                            <h3>Support Our Mission Financially</h3>
                            <p>
                                Your generous contributions through our partner Omprakash directly fund
                                women's empowerment programs in Uganda. Every donation makes a difference.
                            </p>
                        </div>
                        <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                            Donate via Omprakash
                            <span className="visually-hidden"> (opens in a new tab)</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section section--alt" id="contact-form" aria-labelledby="contact-form-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="contact-form-title" tabIndex={-1}>Let's Connect</h2>
                        <p className="lead">We'd love to hear from you. Together, we rise.</p>
                    </div>

                    <div className="gi-contact">
                        <form onSubmit={handleSubmit} className="card form gi-contact__form">
                            <div className="field">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="name"
                                    placeholder="Enter your full name"
                                    className="input"
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="email"
                                    spellCheck={false}
                                    placeholder="Enter your email address"
                                    className="input"
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell us how you'd like to get involved or ask us anything…"
                                    rows="5"
                                    className="input"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn--primary gi-contact__submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                                {isSubmitting ? (<><span className="spinner" aria-hidden="true"></span> Sending…</>) : 'Send Message'}
                            </button>

                            <div role="status" aria-live="polite">
                                {submitStatus === 'success' && (
                                    <div className="form-status">
                                        <FaCheck aria-hidden="true" />
                                        <p>Thank you for reaching out! We'll get back to you soon.</p>
                                    </div>
                                )}
                            </div>
                        </form>

                        <aside className="gi-contact__info" aria-labelledby="gi-contact-info-title">
                            <h3 id="gi-contact-info-title">Get in Touch</h3>
                            <ul className="info-list">
                                <li>
                                    <span className="icon-mark" aria-hidden="true"><FaEnvelope /></span>
                                    <div className="info-list__content">
                                        <span className="info-list__label">Email</span>
                                        <a href="mailto:evelynmwondha@twezulepathways.org" className="info-list__value">
                                            evelynmwondha@twezulepathways.org
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon-mark" aria-hidden="true"><FaPhoneAlt /></span>
                                    <div className="info-list__content">
                                        <span className="info-list__label">Phone</span>
                                        <a href="tel:+256772444876" className="info-list__value">+256 772 444 876</a>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon-mark" aria-hidden="true"><FaMapMarkerAlt /></span>
                                    <div className="info-list__content">
                                        <span className="info-list__label">Location</span>
                                        <span className="info-list__value">Kampala, Uganda</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="gi-social">
                                <h4>Follow Our Journey</h4>
                                <ul className="gi-social__links">
                                    {SOCIAL_LINKS.map((social) => (
                                        <li key={social.name}>
                                            <a href={social.href} className="btn btn--secondary btn--sm" target="_blank" rel="noopener noreferrer">
                                                {social.name}
                                                <span className="visually-hidden"> (opens in a new tab)</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;
