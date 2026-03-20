import React from "react";
import { FaBriefcase, FaHandshake, FaStar } from 'react-icons/fa';
import { FaBullseye, FaBinoculars } from "react-icons/fa";
import "./AboutUsStyles.css"
import CatherineImg from "../assets/Catherine Nakayiza.JPG";
import PhoebeImg from "../assets/Phoebe pic.jpg";
import GodfredImg from "../assets/Godfrey Ofumbi.jpg";
import LeaderImg from "../assets/Leader.jpeg";

function AboutUs() {
    return(
        <div className="about-container enhanced-about">
            {/* Enhanced Our Story Section */}
            <section className="story-section enhanced-story">
                <div className="content-wrapper">
                    <div className="story-header">
                        <div className="story-badge"><FaStar /> Our Journey Since 2025</div>
                        <h1 className="main-title">
                            Our <span className="gradient-text">Story</span>
                        </h1>
                    </div>
                    <div className="story-content">
                        <div className="story-text-wrapper">
                            <p className="story-text enhanced-text">
                                Twezule Pathways was born from a deep desire to see women thrive and lead change in their communities. 
                                Founded by Phoebe Hedwig Aringo and Evelyn Mwondha, who have dedicated over 25 years to empowering 
                                women through programs that ignite self-worth and economic power.
                            </p>
                            <div className="story-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon"><FaStar /></span>
                                    <span className="highlight-text">Women-Led Organization</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon"><FaHandshake /></span>
                                    <span className="highlight-text">African-Rooted Solutions</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon"><FaBullseye /></span>
                                    <span className="highlight-text">Community-Driven Impact</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-visual">
                            <div className="visual-element">
                                <div className="circle-design gold-circle"></div>
                                <div className="circle-design sage-circle"></div>
                                <div className="circle-design plum-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Vision & Mission Section */}
            <section className="vision-mission-section enhanced-vm">
                <div className="content-wrapper">
                    <div className="section-intro">
                        <h2 className="section-title">Our <span className="gradient-text">Purpose</span></h2>
                        <p className="section-subtitle">Driving transformation through clear vision and focused mission</p>
                    </div>
                    <div className="vm-grid enhanced-grid">
                        <div className="vision-card enhanced-card">
                            <div className="card-header">
                                <div className="card-icon vision-icon"><FaBinoculars /></div>
                                <h3>Our Vision</h3>
                            </div>
                            <div className="card-content">
                                <p>A world where every African woman is empowered to overcome poverty and transform her community.</p>
                            </div>
                            <div className="card-accent vision-accent"></div>
                        </div>
                        <div className="mission-card enhanced-card">
                            <div className="card-header">
                                <div className="card-icon mission-icon"><FaBullseye /></div>
                                <h3>Our Mission</h3>
                            </div>
                            <div className="card-content">
                                <p>To fortify the innate power of the African woman by empowering women-led community initiatives through enhancing collaboration, building capacity and innovating sustainable solutions that drive economic growth and social change.</p>
                            </div>
                            <div className="card-accent mission-accent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="approach-section">
                <div className="content-wrapper">
                    <h2 className="section-title">Our Approach</h2>
                    <div className="approach-grid">
                        <div className="approach-item">
                            <div className="approach-icon"><FaBriefcase /></div>
                            <h3>Empower</h3>
                            <p>Through enterprise and savings</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon"><FaHandshake /></div>
                            <h3>Strengthen</h3>
                            <p>Through collaboration and learnings</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon"><FaStar /></div>
                            <h3>Lead</h3>
                            <p>Through community action</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Team Section */}
            <section className="team-section enhanced-team">
                <div className="content-wrapper">
                    <div className="team-header">
                        <h2 className="section-title">Meet Our <span className="gradient-text">Leaders</span></h2>
                        <p className="team-intro enhanced-intro">
                            Our team brings decades of experience in women's empowerment, social enterprise, and community transformation.
                        </p>
                        <div className="team-stats">
                            <div className="team-stat">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="team-stat">
                                <span className="stat-number">2</span>
                                <span className="stat-label">Co-Founders</span>
                            </div>
                            <div className="team-stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Women-Led</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="team-grid enhanced-team-grid">
                        {/* Evelyn Mwondha */}
                        <div className="team-member enhanced-member">
                            <div className="member-photo enhanced-photo">
                                <img src={LeaderImg} alt="Evelyn Mwondha" />
                                <div className="photo-overlay">
                                    <div className="overlay-content">
                                        <span className="role-badge">Executive Director</span>
                                    </div>
                                </div>
                            </div>
                            <div className="member-info enhanced-info">
                                <h3 className="member-name">Evelyn N. Mwondha</h3>
                                <h4 className="member-role">Co-founder and Executive Director</h4>
                                <p>
                                    Evelyn N Mwondha is a Co-Founder and Executive Director of Twezule Pathways, with over 25 years of leadership in microfinance and social development. Former Co-Country Director of Street Business School, she has an extensive background with FINCA Uganda and the Uganda Institute of Bankers. 
                                </p>
                                <p>
                                    An AWEC Fellow with a BSc in Agricultural Economics, Evelyn is passionate about financial inclusion and empowering women to break the cycle of poverty through sustainable, community-driven solutions.
                                </p>
                            </div>
                        </div>

                        {/* Phoebe Aringo */}
                        <div className="team-member enhanced-member">
                            <div className="member-photo enhanced-photo">
                                <img src={PhoebeImg} alt="Phoebe Hedwig Aringo" />
                                <div className="photo-overlay">
                                    <div className="overlay-content">
                                        <span className="role-badge">Impact Strategist</span>
                                    </div>
                                </div>
                            </div>
                            <div className="member-info enhanced-info">
                                <h3 className="member-name">Phoebe Hedwig Aringo</h3>
                                <h4 className="member-role">Co-Founder and Impact Strategist Director</h4>
                                <p>
                                    Phoebe Hedwig Aringo is a dedicated leader with 20+ years of experience in development work, serving with organizations like the Infectious Diseases Institute, BeadforLife, and Street Business School. 
                                </p>
                                <p>
                                    A seasoned entrepreneurship trainer, Phoebe specializes in supporting grassroots women to build sustainable livelihoods. She holds a BA in Social Sciences and is driven by the belief that community-led initiatives are the key to lasting transformation. 
                                </p>
                            </div>
                        </div>

                        {/* Catherine Nakayiza */}
                        <div className="team-member enhanced-member">
                            <div className="member-photo enhanced-photo">
                                <img src={CatherineImg} alt="Catherine Nakayiza" />
                                <div className="photo-overlay">
                                    <div className="overlay-content">
                                        <span className="role-badge">Board Chairperson</span>
                                    </div>
                                </div>
                            </div>
                            <div className="member-info enhanced-info">
                                <h3 className="member-name">Catherine Nakayiza</h3>
                                <h4 className="member-role">Chairperson of the Board of Directors</h4>
                                <p>
                                    Catherine Nakayiza serves as the Chairperson of the Twezule Pathways Board of Directors. She volunteers her expertise in social sciences and human resource management to provide strategic leadership and governance.
                                </p>
                                <p>
                                    With over 20 years of leadership experience across the private and non-profit sectors, Catherine is deeply passionate about children's education and socio-economic transformation for marginalized communities.
                                </p>
                            </div>
                        </div>

                        {/* Godfrey Ofumbi */}
                        <div className="team-member enhanced-member">
                            <div className="member-photo enhanced-photo">
                                <img src={GodfredImg} alt="Godfrey Ofumbi" />
                                <div className="photo-overlay">
                                    <div className="overlay-content">
                                        <span className="role-badge">Board Treasurer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="member-info enhanced-info">
                                <h3 className="member-name">Godfrey Ofumbi</h3>
                                <h4 className="member-role">Treasurer, Local Board of Directors</h4>
                                <p>
                                    Godfrey is a highly experienced professional in civil engineering and construction project management with over 25 years of expertise. His career spans work with the United Nations, ICRC, and USAID-affiliated programs.
                                </p>
                                <p>
                                    Specializing in rural water and sanitation programs, Godfrey holds degrees in Construction Management and Procurement. He is committed to driving high-impact humanitarian infrastructure and sustainable community-based solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs