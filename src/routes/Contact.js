import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaPaperPlane, FaClock, FaCheck, FaComments } from "react-icons/fa";
import "../components/ContactStyles.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-badge">
            <FaComments /> Let's Connect
          </span>
          <h1 className="contact-hero-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          <p className="contact-hero-subtitle">
            Have questions about our programs or want to partner with us? We'd love to hear from you. 
            Reach out and let's start a conversation that makes a difference.
          </p>
          <div className="hero-quick-contact">
            <a href="mailto:evelynmwondha@twezulepathways.org" className="quick-contact-btn">
              <FaEnvelope /> Email Us
            </a>
            <a href="tel:+256772444876" className="quick-contact-btn">
              <FaMobileAlt /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-content-wrapper">
          
          {/* Contact Grid: Form + Info */}
          <div className="contact-main-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              {submitStatus === 'success' && (
                <div className="success-message" role="alert">
                  <FaCheck className="success-icon" />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We'll connect with you soon.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      required
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      required
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      aria-required="true"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      className={errors.message ? 'input-error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information Sidebar */}
            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon email-icon">
                    <FaEnvelope />
                  </div>
                  <h3>Email Address</h3>
                </div>
                <p className="info-text">Send us an email anytime</p>
                <a href="mailto:evelynmwondha@twezulepathways.org" className="info-link">
                  evelynmwondha@twezulepathways.org
                </a>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon phone-icon">
                    <FaMobileAlt />
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <p className="info-text">Call us during business hours</p>
                <a href="tel:+256772444876" className="info-link">
                  +256 772 444 876
                </a>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <div className="info-icon location-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>Our Location</h3>
                </div>
                <p className="info-text">Visit us in person</p>
                <p className="info-address">
                  Kampala, Uganda
                </p>
              </div>

              <div className="info-card response-time">
                <div className="info-header">
                  <div className="info-icon response-icon">
                    <FaClock />
                  </div>
                  <h3>Response Time</h3>
                </div>
                <p className="info-text">We typically respond within</p>
                <p className="response-duration">24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="map-container-wrapper">
          <div className="map-header">
            <h2>Find Us On The Map</h2>
            <p>Located in the heart of Kampala, Uganda</p>
          </div>
          <div className="map-container">
            <iframe
              title="Twezule Pathways Location - Kampala, Uganda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.823768332689!2d32.58452!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17cc5e5d5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map showing Twezule Pathways location in Kampala, Uganda"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
