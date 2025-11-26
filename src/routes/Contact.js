import React, { useState } from "react";
import Hero from "../components/Hero";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <Hero
        cName="hero"
        imgSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        title="Get in Touch"
        text="Contact Twezule Pathways for partnership, volunteering, or inquiries about our programs."
      />
      
      {/* Contact Content */}
      <section className="contact-section" style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--background-light)' }}>
        <div className="content-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Contact Information */}
            <div className="contact-info">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--plum)', marginBottom: '2rem', fontSize: '2.5rem' }}>
                Let's Connect
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text-medium)' }}>
                We're here to answer your questions about our programs, partnerships, and how you can get involved in empowering women across Uganda.
              </p>
              
              <div className="contact-methods" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--sage)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📧</div>
                  <div>
                    <h4 style={{ color: 'var(--plum)', marginBottom: '0.5rem' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-medium)' }}>info@twezulepathways.org</p>
                  </div>
                </div>
                
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📱</div>
                  <div>
                    <h4 style={{ color: 'var(--plum)', marginBottom: '0.5rem' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-medium)' }}>+256 XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--plum-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white' }}>📍</div>
                  <div>
                    <h4 style={{ color: 'var(--plum)', marginBottom: '0.5rem' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-medium)' }}>Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--plum)', marginBottom: '1.5rem', fontSize: '2rem' }}>
                Send us a Message
              </h3>
              
              {submitStatus === 'success' && (
                <div style={{ backgroundColor: 'var(--sage-light)', color: 'var(--sage-dark)', padding: '1rem', borderRadius: 'var(--border-radius)', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--plum)', fontWeight: '600' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid var(--border-light)', borderRadius: 'var(--border-radius)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--plum)', fontWeight: '600' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid var(--border-light)', borderRadius: 'var(--border-radius)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--plum)', fontWeight: '600' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '12px', border: '2px solid var(--border-light)', borderRadius: 'var(--border-radius)', fontSize: '1rem', fontFamily: 'var(--font-body)' }}
                  />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--plum)', fontWeight: '600' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    style={{ width: '100%', padding: '12px', border: '2px solid var(--border-light)', borderRadius: 'var(--border-radius)', fontSize: '1rem', fontFamily: 'var(--font-body)', resize: 'vertical' }}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1.1rem', backgroundColor: isSubmitting ? 'var(--text-light)' : 'var(--gold)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
