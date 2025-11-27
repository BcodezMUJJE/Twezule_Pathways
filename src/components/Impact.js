import React from "react";
import { FaPiggyBank, FaHome, FaGraduationCap, FaHandshake, FaUsers } from 'react-icons/fa';
import "./ImpactStyles.css";

const Impact = () => {
    return (
        <div className="impact-container">
            {/* Header Section */}
            <section className="impact-header">
                <div className="content-wrapper">
                    <h1 className="impact-title">Our Impact: Stories of Women Rising</h1>
                    <p className="impact-subtitle">
                        Witnessing transformation, one woman and one community at a time
                    </p>
                </div>
            </section>

            {/* Visual Highlights Section */}
            <section className="visual-highlights">
                <div className="content-wrapper">
                    <h2 className="section-title">Our Growing Impact</h2>
                    <div className="highlights-grid">
                        <div className="highlight-card">
                            <div className="highlight-icon"><FaUsers /></div>
                            <h3>Women Empowered</h3>
                            <p className="coming-soon">Impact data coming soon</p>
                            <p className="description">Self Help Groups formed and strengthened</p>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon"><FaPiggyBank /></div>
                            <h3>Savings Mobilized</h3>
                            <p className="coming-soon">Impact data coming soon</p>
                            <p className="description">Community savings and investments generated</p>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon"><FaHome /></div>
                            <h3>Communities Reached</h3>
                            <p className="coming-soon">Impact data coming soon</p>
                            <p className="description">Villages and communities transformed</p>
                        </div>
                        <div className="highlight-card">
                            <div className="highlight-icon"><FaGraduationCap /></div>
                            <h3>Leaders Trained</h3>
                            <p className="coming-soon">Impact data coming soon</p>
                            <p className="description">Women equipped with leadership skills</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stories from the Field */}
            <section className="stories-section">
                <div className="content-wrapper">
                    <h2 className="section-title">Stories from the Field</h2>
                    <p className="stories-intro">
                        Real stories of transformation, resilience, and hope from the women we serve
                    </p>
                    
                    <div className="stories-container">
                        <div className="story-card">
                            <div className="story-text-content">
                                <h3>Building Dreams Through Savings</h3>
                                <p>
                                    Experience the transformation as women come together through Self Help Groups, 
                                    learning to save collectively and support one another in building sustainable businesses 
                                    and securing their children's education.
                                </p>
                                <ul className="story-highlights">
                                    <li>Financial independence through collective savings</li>
                                    <li>Community support networks</li>
                                    <li>Business development opportunities</li>
                                </ul>
                                <div className="story-badge">
                                    <span className="badge-location">Kampala Region</span>
                                </div>
                            </div>
                            <div className="story-image-wrapper">
                                <img src={require('../assets/Leader.jpeg')} alt="Women in Self Help Group" />
                            </div>
                        </div>

                        <div className="story-card reverse">
                            <div className="story-text-content">
                                <h3>Finding Her Voice</h3>
                                <p>
                                    Witness how leadership training empowers women to speak up in their communities, 
                                    advocate for women's rights, and become catalysts for positive change in their villages 
                                    and beyond.
                                </p>
                                <ul className="story-highlights">
                                    <li>Confidence building workshops</li>
                                    <li>Women's rights advocacy</li>
                                    <li>Community leadership roles</li>
                                </ul>
                                <div className="story-badge">
                                    <span className="badge-location">Rural Uganda</span>
                                </div>
                            </div>
                            <div className="story-image-wrapper">
                                <img src={require('../assets/Leader.jpeg')} alt="Leadership training session" />
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-text-content">
                                <h3>Knowledge is Power</h3>
                                <p>
                                    Discover how education about rights and safety equips women with essential tools 
                                    for self-protection and creates a strong network of support throughout the community.
                                </p>
                                <ul className="story-highlights">
                                    <li>Rights awareness education</li>
                                    <li>Safety training programs</li>
                                    <li>Community support networks</li>
                                </ul>
                                <div className="story-badge">
                                    <span className="badge-location">Central Uganda</span>
                                </div>
                            </div>
                            <div className="story-image-wrapper">
                                <img src={require('../assets/Leader.jpeg')} alt="Safety training workshop" />
                            </div>
                        </div>
                    </div>

                    <div className="stories-cta">
                        <p>More impact stories coming soon. Follow our journey of transformation!</p>
                    </div>
                </div>
            </section>

            {/* Partners & Collaborations */}
            <section className="partners-section">
                <div className="content-wrapper">
                    <h2 className="section-title">Partners & Collaborations</h2>
                    <p className="partners-intro">
                        We collaborate with like-minded organizations and local networks to amplify women's voices
                    </p>
                    
                    <div className="partners-grid">
                        <div className="partner-card">
                            <div className="partner-logo">
                                <div className="logo-text">SBS</div>
                            </div>
                            <div className="partner-info">
                                <h3>Street Business School</h3>
                                <p>
                                    Partnering in entrepreneurship training and women's economic empowerment initiatives 
                                    across Uganda, building on years of collaborative experience.
                                </p>
                            </div>
                        </div>

                        <div className="partner-card">
                            <div className="partner-logo">
                                <div className="logo-text">Omprakash</div>
                            </div>
                            <div className="partner-info">
                                <h3>Omprakash</h3>
                                <p>
                                    Supporting our mission through their global platform, connecting us with volunteers 
                                    and donors who believe in grassroots women's empowerment.
                                </p>
                            </div>
                        </div>

                        <div className="partner-card future-partner">
                            <div className="partner-logo">
                                <div className="placeholder-logo"><FaHandshake /></div>
                            </div>
                            <div className="partner-info">
                                <h3>Future Partnerships</h3>
                                <p>
                                    We're always looking for organizations that share our vision. 
                                    Partner with us to create lasting change in women's lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Impact;