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
                    
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-image">
                                <img src="../assets/Training session .JPG" alt="Women's savings group" />
                            </div>
                            <div className="story-content">
                                <h3>Building Dreams Through Savings</h3>
                                <p>
                                    "Through our Self Help Group, we learned to save together and support each other. 
                                    Now we're not just surviving – we're building businesses and educating our children."
                                </p>
                                <div className="story-meta">
                                    <span className="story-location">Kampala Region</span>
                                    <span className="story-type">SHG Success</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-image">
                                <img src="../assets/Phoebe and Norah2.JPG" alt="Leadership training" />
                            </div>
                            <div className="story-content">
                                <h3>Finding Her Voice</h3>
                                <p>
                                    "The leadership training gave me confidence to speak up in my community. 
                                    I'm now advocating for women's rights and leading positive change in my village."
                                </p>
                                <div className="story-meta">
                                    <span className="story-location">Rural Uganda</span>
                                    <span className="story-type">Leadership Impact</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-image">
                                <img src="../assets/Catherine NakayizaIMG_9275.JPG" alt="Safety training session" />
                            </div>
                            <div className="story-content">
                                <h3>Knowledge is Power</h3>
                                <p>
                                    "Learning about my rights and safety gave me the tools to protect myself and help other women. 
                                    We're creating a network of support in our community."
                                </p>
                                <div className="story-meta">
                                    <span className="story-location">Central Uganda</span>
                                    <span className="story-type">Safety Training</span>
                                </div>
                            </div>
                        </div>

                        <div className="story-card">
                            <div className="story-image">
                                <img src="../assets/IMG_E2576.JPG" alt="Community meeting" />
                            </div>
                            <div className="story-content">
                                <h3>Community Transformation</h3>
                                <p>
                                    "When women are empowered, entire families and communities benefit. 
                                    Our village has seen real change since the program started."
                                </p>
                                <div className="story-meta">
                                    <span className="story-location">Eastern Uganda</span>
                                    <span className="story-type">Community Impact</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="stories-cta">
                        <p>More impact stories coming soon. Follow our journey!</p>
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