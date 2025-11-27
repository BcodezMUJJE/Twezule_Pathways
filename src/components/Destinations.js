import WomenSaving from "../assets/pphio1.JPG";
import WomenTraining from "../assets/Training session .JPG";
import Leadership from "../assets/Phoebe and Norah2.JPG";
import Community from "../assets/Catherine Nakayiza.JPG";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination enhanced-destination">
            {/* Programs Header */}
            <div className="programs-header enhanced-programs-header">
                <div className="header-badge">🌟 Our Programs</div>
                <h1>Empowering <span className="gradient-text">Women & Communities</span></h1>
                <p className="enhanced-description">Comprehensive training and support programs designed to transform lives</p>
            </div>

            {/* Program Cards */}
            <div className="programs-container">
                {/* Self Help Group Training */}
                <div className="program-card enhanced-card">
                    <div className="program-content">
                        <h2 className="program-title">Self Help Group (SHG) Training</h2>
                        <p className="program-description">
                            Experience grassroots empowerment through our SHG program that connects women with community-led savings and investment opportunities.
                        </p>
                        <ul className="program-features">
                            <li>Savings culture development</li>
                            <li>Community-led solutions</li>
                            <li>Social support networks</li>
                        </ul>
                    </div>
                    <div className="program-image">
                        <img src={WomenSaving} alt="Self Help Group Training" />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                {/* Safety & Power Training */}
                <div className="program-card enhanced-card reverse">
                    <div className="program-content">
                        <h2 className="program-title">Safety & Power Training</h2>
                        <p className="program-description">
                            Addressing Sexual Reproductive Health and Rights and Gender-Based Violence through education, dialogue, and empowerment.
                        </p>
                        <ul className="program-features">
                            <li>Rights awareness education</li>
                            <li>Confidence building workshops</li>
                            <li>Safety pathways guidance</li>
                        </ul>
                    </div>
                    <div className="program-image">
                        <img src={WomenTraining} alt="Safety & Power Training" />
                        <div className="image-overlay"></div>
                    </div>
                </div>

                {/* Leadership & Community Empowerment */}
                <div className="program-card enhanced-card">
                    <div className="program-content">
                        <h2 className="program-title">Leadership & Community Empowerment</h2>
                        <p className="program-description">
                            Nurture women leaders who champion change in their families and communities — building unity, inclusion, and collective progress.
                        </p>
                        <ul className="program-features">
                            <li>Leadership development</li>
                            <li>Community mobilization</li>
                            <li>Transformative action plans</li>
                        </ul>
                    </div>
                    <div className="program-image">
                        <img src={Leadership} alt="Leadership & Community Empowerment" />
                        <div className="image-overlay"></div>
                    </div>
                </div>
            </div>

            {/* Future Programs Section */}
            <div className="future-programs enhanced-future-programs">
                <div className="future-programs-header">
                    <h2>Future <span className="gradient-text">Programs</span></h2>
                    <p className="coming-soon enhanced-coming-soon">🚀 Expanding Our Impact</p>
                </div>
                <div className="future-programs-grid enhanced-future-grid">
                    <div className="future-program-card enhanced-future-card">
                        <div className="card-icon-wrapper">
                            <div className="future-icon">🌱</div>
                        </div>
                        <h3>Adolescent Girls Mentorship</h3>
                        <p>Empowering the next generation of women leaders through mentorship and guidance programs.</p>
                        <span className="status-badge development-badge">In Development</span>
                        <div className="card-glow"></div>
                    </div>
                    <div className="future-program-card enhanced-future-card">
                        <div className="card-icon-wrapper">
                            <div className="future-icon">💼</div>
                        </div>
                        <h3>Women-Led Microenterprise Support</h3>
                        <p>Supporting women entrepreneurs through social enterprise development and business skills training.</p>
                        <span className="status-badge development-badge">In Development</span>
                        <div className="card-glow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;