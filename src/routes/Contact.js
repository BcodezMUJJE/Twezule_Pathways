import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt, FaPaperPlane, FaClock, FaCheck, FaExclamationCircle } from "react-icons/fa";
import "../components/ContactStyles.css";
import PageHero from "../components/PageHero";

const FIELD_ORDER = ['name', 'email', 'message'];

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <span className="field-error" id={id}>
      <FaExclamationCircle aria-hidden="true" />
      {message}
    </span>
  );
}

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
  const formRef = useRef(null);

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
      // Move focus to the first field that needs attention
      const firstInvalid = FIELD_ORDER.find((field) => newErrors[field]);
      if (firstInvalid && formRef.current) {
        const input = formRef.current.querySelector(`[name="${firstInvalid}"]`);
        if (input) input.focus();
      }
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
    <div className="contact">
      {/* Header */}
      <PageHero
        id="contact-title"
        kicker="Let’s Connect"
        title="Get In Touch"
        lead="Have questions about our programs or want to partner with us? We’d love to hear from you. Reach out and let’s start a conversation that makes a difference."
      >
        <a href="mailto:evelynmwondha@twezulepathways.org" className="btn btn--primary">
          <FaEnvelope aria-hidden="true" /> Email Us
        </a>
        <a href="tel:+256772444876" className="btn btn--secondary">
          <FaMobileAlt aria-hidden="true" /> Call Us
        </a>
      </PageHero>

      {/* Form + details */}
      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-form-card">
            <div className="contact-form-card__header">
              <h2 className="heading-3 contact-form-card__title">Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <div role="status" aria-live="polite">
              {submitStatus === 'success' && (
                <div className="form-status contact-form-card__status">
                  <FaCheck aria-hidden="true" />
                  <div>
                    <h3 className="form-status__title">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We'll connect with you soon.</p>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="form" noValidate ref={formRef}>
              <div className="field">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="input"
                />
                <FieldError id="name-error" message={errors.name} />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jane@example.com"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="input"
                />
                <FieldError id="email-error" message={errors.email} />
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  autoComplete="off"
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
                  placeholder="Tell us more about your inquiry…"
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="input"
                ></textarea>
                <FieldError id="message-error" message={errors.message} />
              </div>

              <button
                type="submit"
                className="btn btn--primary contact-form-card__submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner" aria-hidden="true"></span>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact details */}
          <aside className="contact-details" aria-labelledby="contact-details-title">
            <h2 id="contact-details-title" className="visually-hidden">Contact details</h2>
            <ul className="info-list">
              <li>
                <span className="icon-mark" aria-hidden="true"><FaEnvelope /></span>
                <div className="info-list__content">
                  <h3 className="contact-details__title">Email Address</h3>
                  <span className="info-list__label">Send us an email anytime</span>
                  <a href="mailto:evelynmwondha@twezulepathways.org" className="info-list__value">
                    evelynmwondha@twezulepathways.org
                  </a>
                </div>
              </li>
              <li>
                <span className="icon-mark" aria-hidden="true"><FaMobileAlt /></span>
                <div className="info-list__content">
                  <h3 className="contact-details__title">Phone Number</h3>
                  <span className="info-list__label">Call us during business hours</span>
                  <a href="tel:+256772444876" className="info-list__value">+256 772 444 876</a>
                </div>
              </li>
              <li>
                <span className="icon-mark" aria-hidden="true"><FaMapMarkerAlt /></span>
                <div className="info-list__content">
                  <h3 className="contact-details__title">Our Location</h3>
                  <span className="info-list__label">Visit us in person</span>
                  <span className="info-list__value">Kampala, Uganda</span>
                </div>
              </li>
              <li>
                <span className="icon-mark" aria-hidden="true"><FaClock /></span>
                <div className="info-list__content">
                  <h3 className="contact-details__title">Response Time</h3>
                  <span className="info-list__label">We typically respond within</span>
                  <span className="info-list__value">24 Hours</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="section section--alt" aria-labelledby="map-title">
        <div className="container">
          <div className="section-header">
            <h2 id="map-title">Find Us On The Map</h2>
            <p className="lead">Located in the heart of Kampala, Uganda</p>
          </div>
          <div className="contact-map">
            <iframe
              title="Twezule Pathways Location - Kampala, Uganda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.823768332689!2d32.58452!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17cc5e5d5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="440"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
