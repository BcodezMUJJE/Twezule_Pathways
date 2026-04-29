import "./HeroStyles.css";
import Leader from "../assets/Leader.jpeg";
import PhoebeImg from "../assets/Phoebe pic.jpg";
import {
  FaBriefcase,
  FaBook,
  FaComments,
  FaEnvelope,
  FaHandshake,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaVideo
} from "react-icons/fa";

function Hero(props) {
  return (
    <>
      {/* Enhanced Hero Banner */}
      <div className={`${props.cName} enhanced-hero`}>
        <img src={props.imgSrc} alt="Twezule Pathways" />
        <div className="hero-overlay"></div>
        <div className="hero-text enhanced-hero-text">
          <div className="hero-badge"><FaStar /> Empowering Communities Since 2025</div>
          <h1 className="hero-main-title">
            <span className="title-line-1">Together We</span>
            <span className="title-line-2 gradient-text">Rise</span>
          </h1>
          <p className="hero-subtitle">Lighting pathways from vulnerability to self-reliance across Uganda</p>
          <div className="hero-cta-group">
            <a href="/about" className="primary-cta">
              <span>Discover Our Story</span>
            </a>
            <a href="/get-involved" className="secondary-cta">
              <span>Get Involved</span>
            </a>
          </div>
        </div>
        <div className="floating-elements">
          <div className="float-element float-1"></div>
          <div className="float-element float-2"></div>
          <div className="float-element float-3"></div>
        </div>
      </div>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-header">
            <span className="video-badge"><FaVideo /> Watch Our Story</span>
            <h2 className="video-title">
              See the <span className="gradient-text">Impact</span> We're Making
            </h2>
            <p className="video-subtitle">
              Experience the transformation happening in communities across Uganda
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/tIF7mp3J8xQ?si=fZ5kuipnbcYw4dY6"
              title="Twezule Pathways - Our Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="video-overlay-decoration"></div>
          </div>
          <div className="video-caption">
            <p>Join us in creating lasting change for women and communities</p>
          </div>
        </div>
      </section>

      {/* Enhanced Intro Section */}
      <section className="intro-section enhanced-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="intro-heading">
              <span className="highlight-text">Ugandan Women Leading Change</span>
            </h2>
            <p className="intro-description">
              Twezule Pathways is a Ugandan women led organization empowering grassroots women and communities to rise from vulnerability to self-reliance through entrepreneurship, group savings, and leadership development.
            </p>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Combined Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Women Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Program Highlights */}
      <section className="core-programs">
        <div className="container">
          
          {/* Header */}
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="gradient-text">Core Programs</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive training and support that transforms lives
            </p>
          </div>

          {/* Cards */}
          <div className="program-grid">
            
            <div className="program-card">
              <div className="icon-wrapper">
                <FaBriefcase />
              </div>
              <h3>Entrepreneurship Training</h3>
              <p>
                Building a strong savings culture and empowering women with practical
                entrepreneurship skills for sustainable growth.
              </p>
              <div className="accent-line"></div>
            </div>

            <div className="program-card">
              <div className="icon-wrapper">
                <FaShieldAlt />
              </div>
              <h3>Safety & Power Training</h3>
              <p>
                Equipping women with knowledge and tools to prevent and respond
                effectively to gender-based violence.
              </p>
              <div className="accent-line"></div>
            </div>

            <div className="program-card">
              <div className="icon-wrapper">
                <FaHandshake />
              </div>
              <h3>Community Empowerment</h3>
              <p>
                Strengthening self-help groups while fostering leadership,
                inclusion, and grassroots transformation.
              </p>
              <div className="accent-line"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Quote / Impact Statement */}
      <section className="quote-section enhanced-quote">
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="quote-text" style={{color: 'white'}}>
              "When a woman is empowered, a community rises."
            </blockquote>
            <div className="founder-grid">
              <div className="founder-card">
                <div className="quote-image">
                  <img src={Leader} alt="Evelyn Mwondha" />
                </div>
                <div className="author-info">
                  <span className="author-name">Evelyn Mwondha</span>
                  <span className="author-title">Co-Founder and Executive Director</span>
                </div>
              </div>
              <div className="founder-card">
                <div className="quote-image">
                  <img src={PhoebeImg} alt="Phoebe Hedwig Aringo" />
                </div>
                <div className="author-info">
                  <span className="author-name">Phoebe Hedwig Aringo</span>
                  <span className="author-title">Co-Founder and Impact Strategist Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-bg-pattern"></div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="cta-section enhanced-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Join us in <span className="gradient-text">lighting pathways</span> of change
            </h2>
            <p className="cta-description">
              Be part of a movement that's transforming lives and communities across Uganda. 
              Every contribution, partnership, and voice matters.
            </p>
            <div className="cta-buttons enhanced-buttons">
              <a 
                href="https://www.omprakash.org/global/twezule-pathways" 
                className="cta-button primary-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><FaStar /> Get Involved</span>
              </a>
              <a href="/programs" className="cta-button secondary-action">
                <span><FaBook /> Explore Programs</span>
              </a>
              <a href="/contact" className="cta-button tertiary-action">
                <span><FaComments /> Contact Us</span>
              </a>
            </div>
          </div>
          <div className="contact-info enhanced-contact">
            <h3>Ready to Connect?</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon"><FaPhoneAlt /></span>
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+256772444876</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon"><FaEnvelope /></span>
                <div className="contact-details">
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">evelynmwondha@twezulepathways.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;