import "./HeroStyles.css";
import { Link } from "react-router-dom";
import Leader from "../assets/Leader.jpeg";
import PhoebeImg from "../assets/Phoebe pic.jpg";
import {
  FaBriefcase,
  FaEnvelope,
  FaHandshake,
  FaPhoneAlt,
  FaShieldAlt
} from "react-icons/fa";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";

function Hero({ imgSrc }) {
  return (
    <>
      {/* Hero */}
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="kicker">Empowering Communities Since 2025</p>
            <h1 id="home-hero-title" className="home-hero__title">
              <span>Together We</span> <span>Rise</span>
            </h1>
            <p className="home-hero__lead">
              Lighting pathways from vulnerability to self-reliance across Uganda
            </p>
            <div className="btn-group">
              <Link to="/about" className="btn btn--primary">Discover Our Story</Link>
              <Link to="/get-involved" className="btn btn--secondary">Get Involved</Link>
            </div>
          </div>
          <figure className="home-hero__media media media--portrait">
            <img src={imgSrc} alt="Two women embracing and laughing together outdoors" width="1920" height="2560" />
          </figure>
        </div>
      </section>

      {/* Video */}
      <section className="section section--alt home-video" aria-labelledby="home-video-title">
        <div className="container">
          <div className="section-header">
            <h2 id="home-video-title">See the Impact We’re Making</h2>
            <p className="lead">Experience the transformation happening in communities across Uganda</p>
          </div>
          <div className="home-video__frame">
            <iframe
              src="https://www.youtube.com/embed/tIF7mp3J8xQ?si=fZ5kuipnbcYw4dY6"
              title="Twezule Pathways - Our Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <p className="home-video__caption">Join us in creating lasting change for women and communities</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section home-intro" aria-labelledby="home-intro-title">
        <div className="container home-intro__grid">
          <h2 id="home-intro-title">Ugandan Women Leading Change</h2>
          <div className="home-intro__body">
            <p className="home-intro__text">
              Twezule Pathways is a Ugandan women led organization empowering grassroots women and communities to rise from vulnerability to self-reliance through entrepreneurship, group savings, and leadership development.
            </p>
            <dl className="stat-row">
              <div className="stat">
                <dt className="stat__label">Years Combined Experience</dt>
                <dd className="stat__value">1+</dd>
              </div>
              <div className="stat">
                <dt className="stat__label">Women Led</dt>
                <dd className="stat__value">100%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Core programs */}
      <section className="section section--ruled home-core" aria-labelledby="home-core-title">
        <div className="container">
          <div className="section-header">
            <h2 id="home-core-title">Our Core Programs</h2>
            <p className="lead">Comprehensive training and support that transforms lives</p>
          </div>
          <div className="feature-grid">
            <article className="feature">
              <span className="icon-mark" aria-hidden="true"><FaBriefcase /></span>
              <h3>Entrepreneurship Training</h3>
              <p>
                Building a strong savings culture and empowering women with practical
                entrepreneurship skills for sustainable growth.
              </p>
            </article>
            <article className="feature">
              <span className="icon-mark" aria-hidden="true"><FaShieldAlt /></span>
              <h3>Safety &amp; Power Training</h3>
              <p>
                Equipping women with knowledge and tools to prevent and respond
                effectively to gender-based violence.
              </p>
            </article>
            <article className="feature">
              <span className="icon-mark" aria-hidden="true"><FaHandshake /></span>
              <h3>Community Empowerment</h3>
              <p>
                Strengthening self-help groups while fostering leadership,
                inclusion, and grassroots transformation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Founders' quote — the one dark moment on the page */}
      <section className="section section--inverse home-quote" aria-labelledby="home-quote-title">
        <div className="container">
          <h2 id="home-quote-title" className="visually-hidden">Our founders</h2>
          <figure className="home-quote__figure">
            <blockquote className="home-quote__text">
              <p>“When a woman is empowered, a community rises.”</p>
            </blockquote>
            <figcaption className="home-quote__people">
              <div className="person">
                <img src={Leader} alt="Evelyn Mwondha" className="person__photo" width="810" height="1080" loading="lazy" />
                <div>
                  <span className="person__name">Evelyn Mwondha</span>
                  <span className="person__role">Co-Founder and Executive Director</span>
                </div>
              </div>
              <div className="person">
                <img src={PhoebeImg} alt="Phoebe Hedwig Aringo" className="person__photo" width="960" height="1096" loading="lazy" />
                <div>
                  <span className="person__name">Phoebe Hedwig Aringo</span>
                  <span className="person__role">Co-Founder and Impact Strategist Director</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

/* Closing call to action — rendered at the end of the home page */
export function HomeCallToAction() {
  return (
    <section className="section section--ruled home-cta" aria-labelledby="home-cta-title">
      <div className="container home-cta__grid">
        <div className="home-cta__copy">
          <h2 id="home-cta-title">Join us in lighting pathways of change</h2>
          <p className="lead">
            Be part of a movement that’s transforming lives and communities across Uganda.
            Every contribution, partnership, and voice matters.
          </p>
          <div className="btn-group">
            <a href={DONATE_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              Donate via Omprakash
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <Link to="/programs" className="btn btn--secondary">Explore Programs</Link>
            <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
          </div>
        </div>
        <aside className="home-cta__contact" aria-labelledby="home-cta-connect">
          <h3 id="home-cta-connect">Ready to Connect?</h3>
          <ul className="info-list">
            <li>
              <span className="icon-mark" aria-hidden="true"><FaPhoneAlt /></span>
              <div className="info-list__content">
                <span className="info-list__label">Call Us</span>
                <a href="tel:+256772444876" className="info-list__value">+256 772 444 876</a>
              </div>
            </li>
            <li>
              <span className="icon-mark" aria-hidden="true"><FaEnvelope /></span>
              <div className="info-list__content">
                <span className="info-list__label">Email Us</span>
                <a href="mailto:evelynmwondha@twezulepathways.org" className="info-list__value">
                  evelynmwondha@twezulepathways.org
                </a>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
