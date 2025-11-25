import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      {/* Hero Banner */}
      <div className={props.cName}>
        <img src={props.imgSrc} alt="Twezule Pathways" />
        <div className="hero-text">
          <h1>Together We Rise</h1>
          <a href="/about" className="show">
            Learn More
          </a>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-text">
          <p>
            Twezule Pathways is a Ugandan women led organization empowering grassroots women and communities to rise from vulnerability to self-reliance through entrepreneurship, group savings, and leadership development.
          </p>
        </div>
        <div className="intro-image">
          <img src="../assets/pphio1.JPG" alt="Women in training room" />
        </div>
      </section>

      {/* Core Program Highlights */}
      <section className="core-programs">
        <h2>Our Core Programs</h2>
        <div className="program-cards">
          <div className="program-card">
            <h3>Entrepreneurship Training</h3>
            <p>Building savings culture and entrepreneurship skills among women.</p>
          </div>
          <div className="program-card">
            <h3>Safety & Power Training</h3>
            <p>Equipping women to prevent and respond to gender-based violence.</p>
          </div>
          <div className="program-card">
            <h3>Community Empowerment</h3>
            <p>Strengthening and formation of Self Help Groups</p>
            <p>Fostering leadership, inclusion, and transformation at the grassroots.</p>
          </div>
        </div>
      </section>

      {/* Quote / Impact Statement */}
      <section className="quote-section">
        <div className="quote-text">
          "When a woman is empowered, a community rises."
        </div>
        <div className="quote-author">
          – Evelyn Mwondha, Co-Founder and Executive Director
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join us in lighting pathways of change.</h2>
        <div className="cta-buttons">
          <a 
            href="https://www.omprakash.org/global/twezule-pathways" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Involved
          </a>
        </div>
        <div className="contact-info">
          <p>Contact Us:</p>
          <p>Phone: +256772444876</p>
          <p>Email: evelynmwondha@twezulepathways.org</p>
        </div>
      </section>
    </>
  );
}

export default Hero;