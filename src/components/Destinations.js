import WomenSaving from "../assets/pphio1.JPG";
import WomenTraining from "../assets/Training session .JPG";
import Leadership from "../assets/Phoebe and Norah2.JPG";
import Community from "../assets/Catherine Nakayiza.JPG";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination enhanced-destination">
            <div className="programs-header enhanced-programs-header">
                <div className="header-badge">🌟 Transformative Programs</div>
                <h1>Our <span className="gradient-text">Programs</span></h1>
                <p className="enhanced-description">Empowering women and communities through comprehensive training and support programs</p>
                <div className="programs-stats">
                    <div className="program-stat">
                        <span className="stat-number">3</span>
                        <span className="stat-label">Active Programs</span>
                    </div>
                    <div className="program-stat">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Women Impacted</span>
                    </div>
                    <div className="program-stat">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Community-Led</span>
                    </div>
                </div>
            </div>

            <DestinationData 
                className="first-des"
                heading="Self Help Group (SHG) Training"
                text="Women come together to save, invest, and lift each other. Our SHG program strengthens the culture of savings, promotes innovation of community-led solutions and social support among women at the grassroots." 
                img1={WomenSaving}
                img2={WomenTraining}
            />
            
            <DestinationData 
                className="first-des-reverse"
                heading="Safety & Power Training"
                text="Addressing Sexual Reproductive Health and Rights and Gender-Based Violence through education, dialogue, and empowerment. This training helps women recognize their rights, build confidence, and find pathways to safety." 
                img1={Leadership}
                img2={Community}
            />

            <DestinationData 
                className="first-des"
                heading="Leadership & Community Empowerment"
                text="We nurture women leaders who champion change in their families and communities — building unity, inclusion, and collective progress." 
                img1={WomenSaving}
                img2={Leadership}
            />

            {/* Enhanced Future Programs Section */}
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