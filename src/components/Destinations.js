import WomenSaving from "../assets/pphio1.JPG";
import WomenTraining from "../assets/Training session .JPG";
import Leadership from "../assets/Phoebe and Norah2.JPG";
import Community from "../assets/Catherine Nakayiza.JPG";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return (
        <div className="destination">
            <div className="programs-header">
                <h1>Our Programs</h1>
                <p>Empowering women and communities through comprehensive training and support programs</p>
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

            {/* Future Programs Section */}
            <div className="future-programs">
                <h2>Future Programs</h2>
                <p className="coming-soon">Coming Soon</p>
                <div className="future-programs-grid">
                    <div className="future-program-card">
                        <h3>Adolescent Girls Mentorship</h3>
                        <p>Empowering the next generation of women leaders through mentorship and guidance programs.</p>
                        <span className="status-badge">In Development</span>
                    </div>
                    <div className="future-program-card">
                        <h3>Women-Led Microenterprise Support</h3>
                        <p>Supporting women entrepreneurs through social enterprise development and business skills training.</p>
                        <span className="status-badge">In Development</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;