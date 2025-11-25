import "./AboutUsStyles.css"
import React from "react";

function AboutUs() {
    return(
        <div className="about-container">
            {/* Our Story Section */}
            <section className="story-section">
                <div className="content-wrapper">
                    <h1 className="main-title">Our Story</h1>
                    <p className="story-text">
                        Twezule Pathways was born from a deep desire to see women thrive and lead change in their communities. 
                        Founded by Phoebe Hedwig Aringo and Evelyn Mwondha, who have dedicated over 25 years to empowering 
                        women through programs that ignite self-worth and economic power.
                    </p>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="vision-mission-section">
                <div className="content-wrapper">
                    <div className="vm-grid">
                        <div className="vision-card">
                            <h2>Our Vision</h2>
                            <p>A world where every African woman is empowered to overcome poverty and transform her community.</p>
                        </div>
                        <div className="mission-card">
                            <h2>Our Mission</h2>
                            <p>To fortify the innate power of the African woman by empowering women-led community initiatives through enhancing collaboration, building capacity and innovating sustainable solutions that drive economic growth and social change.</p>
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
                            <div className="approach-icon">💼</div>
                            <h3>Empower</h3>
                            <p>Through enterprise and savings</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon">🤝</div>
                            <h3>Strengthen</h3>
                            <p>Through collaboration and learnings</p>
                        </div>
                        <div className="approach-item">
                            <div className="approach-icon">🌟</div>
                            <h3>Lead</h3>
                            <p>Through community action</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="content-wrapper">
                    <h2 className="section-title">Our Team</h2>
                    <p className="team-intro">
                        Our team brings decades of experience in women's empowerment, social enterprise, and community transformation.
                    </p>
                    
                    <div className="team-grid">
                        {/* Evelyn Mwondha */}
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/images/evelyn-mwondha.jpg" alt="Evelyn Mwondha" />
                            </div>
                            <div className="member-info">
                                <h3>Evelyn N. Mwondha</h3>
                                <h4>Co-founder and Executive Director</h4>
                                <p>
                                    Evelyn N Mwondha is a Co-Founder and the Executive Director of Twezule Pathways, bringing over 25 years of leadership experience in microfinance, entrepreneurship, and social development. She previously served as Co-Country Director of Street Business School in Uganda, where she oversaw program strategy, fundraising, and community outreach, women's entrepreneurship training.
                                </p>
                                <p>
                                    Evelyn has also worked with FINCA Uganda, and Uganda Institute of Bankers, leading initiatives in financial inclusion, women's economic empowerment, and capacity building. With a strong background in banking, project management, and community-driven solutions, Evelyn is dedicated to helping marginalized communities to work their way out of the vicious cycle of poverty and is passionate about women economic empowerment.
                                </p>
                                <p>
                                    She holds a BSc in Agricultural Economics from Makerere University, a Diploma in SME Management from Galilee College (Israel), and is an African Women Entrepreneurship Cooperative (AWEC) Fellow.
                                </p>
                            </div>
                        </div>

                        {/* Phoebe Aringo */}
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/images/phoebe-aringo.jpg" alt="Phoebe Hedwig Aringo" />
                            </div>
                            <div className="member-info">
                                <h3>Phoebe Hedwig Aringo</h3>
                                <h4>Co-Founder and Impact Strategist Director</h4>
                                <p>
                                    Phoebe Hedwig Aringo is a dedicated leader with over 20 years of experience in development work, championing women's empowerment, education, and community transformation. She has served with influential organizations across Uganda, including the Infectious Diseases Institute, African Girls Can, BeadforLife, Street Business School, and now Twezule Pathways, where she continues to advance her passion for locally led development.
                                </p>
                                <p>
                                    Phoebe holds a Bachelor of Arts in Social Sciences from Makerere University and has completed multiple professional trainings in Project Management. She is also a seasoned entrepreneurship trainer with extensive experience supporting grassroots women to build sustainable livelihoods and lead community-driven initiatives.
                                </p>
                                <p>
                                    Throughout her career, Phoebe has empowered countless individuals to rise above poverty through self-sufficiency, entrepreneurship, and collective action. Her leadership is guided by a deep belief that when communities are entrusted with the tools and opportunities to lead, transformation becomes lasting and inclusive. Phoebe lives in Kampala with her family.
                                </p>
                            </div>
                        </div>

                        {/* Catherine Nakayiza */}
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/images/catherine-nakayiza.jpg" alt="Catherine Nakayiza" />
                            </div>
                            <div className="member-info">
                                <h3>Catherine Nakayiza</h3>
                                <h4>Chairperson of the Board of Directors</h4>
                                <p>
                                    Catherine Nakayiza serves as the Chairperson of the Twezule Pathways Board of Directors in Uganda. In this role, she generously volunteers her time and expertise to work alongside fellow board members in providing strategic leadership, governance, and support to advance the organization's mission. She holds a strong academic foundation in social sciences, human resource management, and administration at the postgraduate level.
                                </p>
                                <p>
                                    Catherine brings over 20 years of diverse leadership experience from both international private-sector and non-profit organizations. She previously served as the Director of Operations and Human Resources at Street Business School Uganda and currently partners with Wycliffe Associates as an International Field Trainer.
                                </p>
                                <p>
                                    Catherine is deeply passionate about children's education and socio-economic transformation, especially for marginalized communities. She is guided by a strong personal ethos of integrity, respect for humanity, and accountability to the Lord above all.
                                </p>
                            </div>
                        </div>

                        {/* Godfrey Ofumbi */}
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/images/godfrey-ofumbi.jpg" alt="Godfrey Ofumbi" />
                            </div>
                            <div className="member-info">
                                <h3>Godfrey Ofumbi</h3>
                                <h4>Treasurer, Local Board of Directors</h4>
                                <p>
                                    Godfrey is a highly experienced professional in the built environment sector, bringing over 25 years of expertise in civil engineering, construction project management, facilities management, procurement, and contracts management. His career spans work with the United Nations, the International Committee of the Red Cross (ICRC), USAID-affiliated programs, numerous non-governmental and community-based organizations, as well as the private sector.
                                </p>
                                <p>
                                    He offers more than 10 years of leadership experience at both local and international levels, along with over 15 years of community-based work—particularly in rural water and sanitation programs. His most recent role was serving as the Water and Habitat Project Manager in Khartoum, Sudan, where he led complex, high-impact humanitarian infrastructure initiatives.
                                </p>
                                <p>
                                    Godfrey holds a Bachelor's Degree in Construction Management from Makerere University, a Diploma in Building and Civil Engineering from Kyambogo Polytechnic, and a Diploma in Procurement and Supply from the UK's Chartered Institute of Procurement and Supply. He has also attained several professional certifications, including the internationally recognized PRINCE2 project management certification.
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