import "./HeroStyles.css";
import Leader from "../assets/Leader.jpeg";

function Hero(props) {
  return (
    <>
      {/* Enhanced Hero Banner */}
      <div className={`${props.cName} enhanced-hero`}>
        <img src={props.imgSrc} alt="Twezule Pathways" />
        <div className="hero-overlay"></div>
        <div className="hero-text enhanced-hero-text">
          <div className="hero-badge">✨ Empowering Communities Since 2023</div>
          <h1 className="hero-main-title">
            <span className="title-line-1">Together We</span>
            <span className="title-line-2 gradient-text">Rise</span>
          </h1>
          <p className="hero-subtitle">Lighting pathways from vulnerability to self-reliance across Uganda</p>
          <div className="hero-cta-group">
            <a href="/about" className="show primary-cta">
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

      {/* Enhanced Intro Section */}
      <section className="intro-section enhanced-intro">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="intro-heading">
              <span className="highlight-text">Ugandan Women Leading Change</span>
            </h2>
            <p className="intro-description" style={{color: 'white'}}>
              Twezule Pathways is a Ugandan women led organization empowering grassroots women and communities to rise from vulnerability to self-reliance through entrepreneurship, group savings, and leadership development.
            </p>
            <div className="intro-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label" style={{color: 'white'}}>Years Combined Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label" style={{color: 'white'}}>Women Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Program Highlights */}
      <section className="core-programs enhanced-programs">
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              Our <span className="gradient-text">Core Programs</span>
            </h2>
            <p className="section-subtitle">Comprehensive training and support that transforms lives</p>
          </div>
          <div className="program-cards enhanced-cards">
            <div className="program-card entrepreneurship-card">
              <div className="card-icon">💼</div>
              <h3>Entrepreneurship Training</h3>
              <p>Building savings culture and entrepreneurship skills among women.</p>
              <div className="card-accent"></div>
            </div>
            <div className="program-card safety-card">
              <div className="card-icon">🛡️</div>
              <h3>Safety & Power Training</h3>
              <p>Equipping women to prevent and respond to gender-based violence.</p>
              <div className="card-accent"></div>
            </div>
            <div className="program-card community-card">
              <div className="card-icon">🤝</div>
              <h3>Community Empowerment</h3>
              <p>Strengthening and formation of Self Help Groups</p>
              <p>Fostering leadership, inclusion, and transformation at the grassroots.</p>
              <div className="card-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quote / Impact Statement */}
      <section className="quote-section enhanced-quote">
        <div className="quote-container">
          <div className="quote-content">
            <div className="quote-image">
              <img src={Leader} alt="Evelyn Mwondha" />
            </div>
            <blockquote className="quote-text" style={{color: 'white'}}>
              "When a woman is empowered, a community rises."
            </blockquote>
            <div className="quote-author">
              <div className="author-info">
                <span className="author-name">– Evelyn Mwondha</span>
                <span className="author-title">Co-Founder and Executive Director</span>
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
                <span>🌟 Get Involved</span>
              </a>
              <a href="/programs" className="cta-button secondary-action">
                <span>📚 Explore Programs</span>
              </a>
              <a href="/contact" className="cta-button tertiary-action">
                <span>💬 Contact Us</span>
              </a>
            </div>
          </div>
          <div className="contact-info enhanced-contact">
            <h3>Ready to Connect?</h3>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+256772444876</span>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">✉️</span>
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