import "./HeroStyles.css";
import { Link } from "react-router-dom";
import PageHero from "./PageHero";
import { FaChevronRight, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Leader from "../assets/Leader.jpeg";
import PhoebeImg from "../assets/Phoebe pic.jpg";
import SavingsImg from "../assets/Tw3.JPG";
import SafetyImg from "../assets/Tw2.JPG";
import CommunityImg from "../assets/Tw1.JPG";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";

const CORE_PROGRAMS = [
  {
    title: "Entrepreneurship Training",
    text: "Building a strong savings culture and empowering women with practical entrepreneurship skills for sustainable growth.",
    to: "/programs#shg-training",
    image: SavingsImg,
    alt: "A woman holding a baby during a Self Help Group session",
  },
  {
    title: "Safety & Power Training",
    text: "Equipping women with knowledge and tools to prevent and respond effectively to gender-based violence.",
    to: "/programs#safety-training",
    image: SafetyImg,
    alt: "Women taking notes during a training workshop",
  },
  {
    title: "Community Empowerment",
    text: "Strengthening self-help groups while fostering leadership, inclusion, and grassroots transformation.",
    to: "/programs#community",
    image: CommunityImg,
    alt: "A facilitator reviewing notes with women in a community group",
  },
];

const WAYS_TO_HELP = [
  {
    title: "Partner with Us",
    text: "NGOs, local governments, and institutions can collaborate on programs or research.",
    to: "/get-involved#partner",
  },
  {
    title: "Volunteer or Intern",
    text: "Support our field trainings, communications, or research.",
    to: "/get-involved#volunteer",
  },
  {
    title: "Champion Twezule",
    text: "Share our story, connect us with networks or funders.",
    to: "/get-involved#champion",
  },
];

function Hero({ imgSrc }) {
  return (
    <>
      {/* ---- Hero ---- */}
      <PageHero
        id="home-hero-title"
        size="full"
        image={imgSrc}
        imageAlt="Two women embracing and laughing together outdoors"
        imageWidth="1920"
        imageHeight="2560"
        kicker="Together We Rise"
        title="Empowering Ugandan women to rise from vulnerability to self-reliance"
        lead="A women-led organization empowering grassroots communities since 2025 through entrepreneurship, group savings, and leadership development."
      >
        <Link to="/get-involved" className="btn btn--primary">Get Involved</Link>
        <Link to="/about" className="btn btn--secondary">Discover Our Story</Link>
      </PageHero>

      {/* ---- What we do ---- */}
      <section className="section home-programs" aria-labelledby="home-programs-title">
        <div className="container">
          <div className="home-programs__header">
            <div className="section-header">
              <h2 id="home-programs-title">Our Core Programs</h2>
              <p className="lead">Comprehensive training and support that transforms lives</p>
            </div>
            <Link to="/programs" className="btn btn--secondary">View All Programs</Link>
          </div>

          <ul className="home-programs__grid">
            {CORE_PROGRAMS.map((program) => (
              <li className="home-program" key={program.title}>
                <figure className="media home-program__media">
                  <img src={program.image} alt={program.alt} width="1920" height="1280" loading="lazy" />
                </figure>
                <h3 className="home-program__title">
                  <Link to={program.to} className="home-program__link">{program.title}</Link>
                </h3>
                <p className="home-program__text">{program.text}</p>
                <span className="home-program__more" aria-hidden="true">
                  Learn more <FaChevronRight />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Video ---- */}
      <section className="section section--alt home-video" aria-labelledby="home-video-title">
        <div className="container home-video__grid">
          <div className="section-header home-video__header">
            <h2 id="home-video-title">See the Impact We’re Making</h2>
            <p className="lead">Experience the transformation happening in communities across Uganda</p>
            <p className="home-video__caption">Join us in creating lasting change for women and communities</p>
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
        </div>
      </section>

      {/* ---- Leadership: the one dark band on the page ---- */}
      <section className="section section--inverse home-leaders" aria-labelledby="home-leaders-title">
        <div className="container">
          <h2 id="home-leaders-title" className="home-leaders__title">Ugandan Women Leading Change</h2>
          <figure className="home-leaders__quote">
            <blockquote>
              <p>“When a woman is empowered, a community rises.”</p>
            </blockquote>
            <figcaption className="home-leaders__people">
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
          <div className="home-leaders__footer">
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
            <Link to="/about" className="btn btn--secondary">Meet Our Leaders</Link>
          </div>
        </div>
      </section>

      {/* ---- Call to action ---- */}
      <section className="section home-cta" aria-labelledby="home-cta-title">
        <div className="container home-cta__grid">
          <div className="home-cta__copy">
            <h2 id="home-cta-title">Join us in lighting pathways of change</h2>
            <p className="lead">
              Be part of a movement that’s transforming lives and communities across Uganda.
              Every contribution, partnership, and voice matters.
            </p>
            <div className="btn-group">
              <a href={DONATE_URL} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
                Donate via Omprakash
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <Link to="/contact" className="btn btn--secondary">Contact Us</Link>
            </div>
            <ul className="home-cta__contact" aria-label="Ready to Connect?">
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href="tel:+256772444876">+256 772 444 876</a>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:evelynmwondha@twezulepathways.org">evelynmwondha@twezulepathways.org</a>
              </li>
            </ul>
          </div>

          <nav className="home-cta__ways" aria-labelledby="home-cta-ways-title">
            <h3 id="home-cta-ways-title" className="home-cta__ways-title">Ways to Get Involved</h3>
            <ul>
              {WAYS_TO_HELP.map((way) => (
                <li key={way.title}>
                  <Link to={way.to} className="home-cta__way">
                    <span className="home-cta__way-text">
                      <span className="home-cta__way-title">{way.title}</span>
                      <span className="home-cta__way-desc">{way.text}</span>
                    </span>
                    <FaChevronRight aria-hidden="true" className="home-cta__way-icon" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Hero;
