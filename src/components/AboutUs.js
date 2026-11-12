import React from "react";
import { FaBriefcase, FaHandshake, FaStar, FaBullseye, FaBinoculars } from "react-icons/fa";
import "./AboutUsStyles.css";
import CatherineImg from "../assets/Catherine Nakayiza.JPG";
import PhoebeImg from "../assets/Phoebe pic.jpg";
import GodfredImg from "../assets/Godfrey Ofumbi.jpg";
import LeaderImg from "../assets/Leader.jpeg";
import StoryImg from "../assets/Tw7.JPG";

const TEAM = [
    {
        name: "Evelyn N. Mwondha",
        role: "Co-founder and Executive Director",
        photo: LeaderImg,
        photoAlt: "Evelyn Mwondha",
        width: 810,
        height: 1080,
        bio: [
            "Evelyn N Mwondha is a Co-Founder and Executive Director of Twezule Pathways, with over 25 years of leadership in microfinance and social development. Former Co-Country Director of Street Business School, she has an extensive background with FINCA Uganda and the Uganda Institute of Bankers.",
            "An AWEC Fellow with a BSc in Agricultural Economics, Evelyn is passionate about financial inclusion and empowering women to break the cycle of poverty through sustainable, community-driven solutions.",
        ],
    },
    {
        name: "Phoebe Hedwig Aringo",
        role: "Co-Founder and Impact Strategist Director",
        photo: PhoebeImg,
        photoAlt: "Phoebe Hedwig Aringo",
        width: 960,
        height: 1096,
        bio: [
            "Phoebe Hedwig Aringo is a dedicated leader with 20+ years of experience in development work, serving with organizations like the Infectious Diseases Institute, BeadforLife, and Street Business School.",
            "A seasoned entrepreneurship trainer, Phoebe specializes in supporting grassroots women to build sustainable livelihoods. She holds a BA in Social Sciences and is driven by the belief that community-led initiatives are the key to lasting transformation.",
        ],
    },
    {
        name: "Catherine Nakayiza",
        role: "Chairperson of the Board of Directors",
        photo: CatherineImg,
        photoAlt: "Catherine Nakayiza",
        width: 1920,
        height: 1440,
        bio: [
            "Catherine Nakayiza serves as the Chairperson of the Twezule Pathways Board of Directors. She volunteers her expertise in social sciences and human resource management to provide strategic leadership and governance.",
            "With over 20 years of leadership experience across the private and non-profit sectors, Catherine is deeply passionate about children's education and socio-economic transformation for marginalized communities.",
        ],
    },
    {
        name: "Godfrey Ofumbi",
        role: "Treasurer, Local Board of Directors",
        photo: GodfredImg,
        photoAlt: "Godfrey Ofumbi",
        width: 712,
        height: 711,
        bio: [
            "Godfrey is a highly experienced professional in civil engineering and construction project management with over 25 years of expertise. His career spans work with the United Nations, ICRC, and USAID-affiliated programs.",
            "Specializing in rural water and sanitation programs, Godfrey holds degrees in Construction Management and Procurement. He is committed to driving high-impact humanitarian infrastructure and sustainable community-based solutions.",
        ],
    },
];

function AboutUs() {
    return (
        <div className="about">
            {/* Our Story */}
            <header className="page-header about-story">
                <div className="container split">
                    <div className="split__body about-story__body">
                        <p className="kicker">Our Journey Since 2025</p>
                        <h1>Our Story</h1>
                        <p className="about-story__text">
                            Twezule Pathways was born from a deep desire to see women thrive and lead change in their communities.
                            Founded by Phoebe Hedwig Aringo and Evelyn Mwondha, who have dedicated over 25 years to empowering
                            women through programs that ignite self-worth and economic power.
                        </p>
                        <ul className="about-story__highlights">
                            <li><FaStar aria-hidden="true" /> Women-Led Organization</li>
                            <li><FaHandshake aria-hidden="true" /> African-Rooted Solutions</li>
                            <li><FaBullseye aria-hidden="true" /> Community-Driven Impact</li>
                        </ul>
                    </div>
                    <figure className="split__media media media--portrait about-story__media">
                        <img src={StoryImg} alt="Women taking part in a community training session, one raising her hand to speak" width="1920" height="1280" />
                    </figure>
                </div>
            </header>

            {/* Vision & Mission */}
            <section className="section section--alt" aria-labelledby="purpose-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="purpose-title">Our Purpose</h2>
                        <p className="lead">Driving transformation through clear vision and focused mission</p>
                    </div>
                    <div className="feature-grid about-purpose">
                        <article className="feature">
                            <span className="icon-mark" aria-hidden="true"><FaBinoculars /></span>
                            <h3>Our Vision</h3>
                            <p className="about-purpose__text">A world where every African woman is empowered to overcome poverty and transform her community.</p>
                        </article>
                        <article className="feature">
                            <span className="icon-mark" aria-hidden="true"><FaBullseye /></span>
                            <h3>Our Mission</h3>
                            <p className="about-purpose__text">To fortify the innate power of the African woman by empowering women-led community initiatives through enhancing collaboration, building capacity and innovating sustainable solutions that drive economic growth and social change.</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section" aria-labelledby="approach-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="approach-title">Our Approach</h2>
                    </div>
                    <div className="feature-grid">
                        <article className="feature">
                            <span className="icon-mark" aria-hidden="true"><FaBriefcase /></span>
                            <h3>Empower</h3>
                            <p>Through enterprise and savings</p>
                        </article>
                        <article className="feature">
                            <span className="icon-mark" aria-hidden="true"><FaHandshake /></span>
                            <h3>Strengthen</h3>
                            <p>Through collaboration and learnings</p>
                        </article>
                        <article className="feature">
                            <span className="icon-mark" aria-hidden="true"><FaStar /></span>
                            <h3>Lead</h3>
                            <p>Through community action</p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section section--alt" aria-labelledby="team-title">
                <div className="container">
                    <div className="about-team__header">
                        <div className="section-header">
                            <h2 id="team-title">Meet Our Leaders</h2>
                            <p className="lead">
                                Our team brings decades of experience in women's empowerment, social enterprise, and community transformation.
                            </p>
                        </div>
                        <dl className="stat-row">
                            <div className="stat">
                                <dt className="stat__label">Years Experience</dt>
                                <dd className="stat__value">25+</dd>
                            </div>
                            <div className="stat">
                                <dt className="stat__label">Co-Founders</dt>
                                <dd className="stat__value">2</dd>
                            </div>
                            <div className="stat">
                                <dt className="stat__label">Women-Led</dt>
                                <dd className="stat__value">100%</dd>
                            </div>
                        </dl>
                    </div>

                    <ul className="about-team">
                        {TEAM.map((member) => (
                            <li className="about-team__member" key={member.name}>
                                <figure className="media media--portrait about-team__photo">
                                    <img src={member.photo} alt={member.photoAlt} width={member.width} height={member.height} loading="lazy" />
                                </figure>
                                <div className="about-team__info">
                                    <h3>{member.name}</h3>
                                    <p className="about-team__role">{member.role}</p>
                                    <div className="prose about-team__bio">
                                        {member.bio.map((paragraph) => (
                                            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
