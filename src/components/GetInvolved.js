import React, { useState } from "react";
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
                                <img src="/images/partnership-icon.svg" alt="Partnership" />
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
                                <img src="/images/volunteer-icon.svg" alt="Volunteer" />
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
                                <img src="/images/champion-icon.svg" alt="Champion" />
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

            {/* Footer */}
            <footer className="site-footer">
                <div className="content-wrapper">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <img src="/images/twezule-logo.png" alt="Twezule" />
                            </div>
                            <p className="footer-tagline">
                                Empowering women, transforming communities
                            </p>
                        </div>

                        <div className="footer-links">
                            <h4>Quick Links</h4>
                            <nav className="footer-nav">
                                <a href="/">Home</a>
                                <a href="/about">About</a>
                                <a href="/programs">Programs</a>
                                <a href="/impact">Impact</a>
                                <a href="/get-involved">Get Involved</a>
                            </nav>
                        </div>

                        <div className="footer-contact">
                            <h4>Contact Info</h4>
                            <p>Email: evelynmwondha@twezulepathways.org</p>
                            <p>Phone: +246 772 444 876</p>
                            <p>Kampala, Uganda</p>
                        </div>

                        <div className="footer-social">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <button 
                                    className="social-icon linkedin" 
                                    aria-label="LinkedIn"
                                    onClick={() => handleSocialClick('LinkedIn')}
                                    type="button"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </button>
                                <button 
                                    className="social-icon facebook" 
                                    aria-label="Facebook"
                                    onClick={() => handleSocialClick('Facebook')}
                                    type="button"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </button>
                                <button 
                                    className="social-icon instagram" 
                                    aria-label="Instagram"
                                    onClick={() => handleSocialClick('Instagram')}
                                    type="button"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Twezule Pathways. All rights reserved. Empowering women, transforming communities.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GetInvolved;