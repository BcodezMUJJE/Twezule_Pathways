import React, { useState } from "react";
import { FaHandshake, FaUsers, FaStar } from 'react-icons/fa';
import "./GetInvolvedStyles.css";

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

    const handleSocialClick = (platform) => {
        // Placeholder function for social media clicks
        console.log(`${platform} clicked - redirect to social media page when available`);
    };

    return (
        <div className="get-involved-container">
            {/* Header Section */}
            <section className="get-involved-header">
                <div className="content-wrapper">
                    <h1 className="get-involved-title">Get Involved</h1>
                    <p className="get-involved-intro">
                        Every woman deserves the opportunity to rise. You can be part of that journey.
                    </p>
                </div>
            </section>

            {/* Ways to Get Involved Section */}
            <section className="ways-to-help">
                <div className="content-wrapper">
                    <h2 className="section-title">Ways to Get Involved</h2>
                    <p className="section-subtitle">
                        Join our mission to empower women and transform communities across Uganda
                    </p>
                    
                    <div className="involvement-grid">
                        {/* Partner with Us */}
                        <div className="involvement-card partner-card">
                            <div className="card-icon">
                                <FaHandshake className="react-icon" />
                            </div>
                            <h3>Partner with Us</h3>
                            <p>
                                NGOs, local governments, and institutions can collaborate on programs or research. 
                                Together, we can amplify our impact and reach more communities.
                            </p>
                            <ul className="involvement-list">
                                <li>Program collaboration opportunities</li>
                                <li>Research partnerships</li>
                                <li>Resource sharing initiatives</li>
                                <li>Joint advocacy campaigns</li>
                            </ul>
                            <button 
                                className="involvement-btn primary-btn"
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Explore Partnership
                            </button>
                        </div>

                        {/* Volunteer or Intern */}
                        <div className="involvement-card volunteer-card">
                            <div className="card-icon">
                                <FaUsers className="react-icon" />
                            </div>
                            <h3>Volunteer or Intern</h3>
                            <p>
                                Support our field trainings, communications, or research. Share your skills 
                                and passion while gaining meaningful experience in grassroots development.
                            </p>
                            <ul className="involvement-list">
                                <li>Field training facilitation</li>
                                <li>Communications and storytelling</li>
                                <li>Research and documentation</li>
                                <li>Program support and coordination</li>
                            </ul>
                            <button 
                                className="involvement-btn primary-btn"
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Join Our Team
                            </button>
                        </div>

                        {/* Champion Twezule */}
                        <div className="involvement-card champion-card">
                            <div className="card-icon">
                                <FaStar className="react-icon" />
                            </div>
                            <h3>Champion Twezule</h3>
                            <p>
                                Share our story, connect us with networks or funders. Be our voice in your 
                                community and help us expand our reach to empower more women.
                            </p>
                            <ul className="involvement-list">
                                <li>Share our story and mission</li>
                                <li>Connect us with potential funders</li>
                                <li>Introduce us to your networks</li>
                                <li>Advocate for women's empowerment</li>
                            </ul>
                            <button 
                                className="involvement-btn primary-btn"
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Become a Champion
                            </button>
                        </div>
                    </div>

                    {/* Future Donation Section */}
                    <div className="future-donation-section">
                        <div className="donation-card">
                            <h3>Support Our Mission Financially</h3>
                            <p>
                                Direct financial support coming soon through our partnership with Omprakash. 
                                Your contributions will directly fund women's empowerment programs.
                            </p>
                            <button className="involvement-btn secondary-btn" disabled>
                                Donate (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section" id="contact-form">
                <div className="content-wrapper">
                    <div className="form-header">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="form-subtitle">
                            We'd love to hear from you. Together, we rise.
                        </p>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your email address"
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell us how you'd like to get involved or ask us anything..."
                                    rows="5"
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="success-message">
                                    <p>Thank you for reaching out! We'll get back to you soon.</p>
                                </div>
                            )}
                        </form>

                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div>
                                        <p className="contact-label">Email</p>
                                        <a href="mailto:evelynmwondha@twezulepathways.org" className="contact-value">
                                            evelynmwondha@twezulepathways.org
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div>
                                        <p className="contact-label">Phone</p>
                                        <a href="tel:+246772444876" className="contact-value">
                                            +246 772 444 876
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <p className="contact-label">Location</p>
                                        <p className="contact-value">Kampala, Uganda</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h4>Follow Our Journey</h4>
                                <div className="social-links">
                                    <button 
                                        className="social-link linkedin"
                                        onClick={() => handleSocialClick('LinkedIn')}
                                        type="button"
                                    >
                                        <span>LinkedIn</span>
                                    </button>
                                    <button 
                                        className="social-link facebook"
                                        onClick={() => handleSocialClick('Facebook')}
                                        type="button"
                                    >
                                        <span>Facebook</span>
                                    </button>
                                    <button 
                                        className="social-link instagram"
                                        onClick={() => handleSocialClick('Instagram')}
                                        type="button"
                                    >
                                        <span>Instagram</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetInvolved;