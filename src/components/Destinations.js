import WomenSaving from "../assets/Tw3.JPG";
import WomenTraining from "../assets/Tw2.JPG";
import Leadership from "../assets/Tw1.JPG";
import { FaBriefcase, FaSeedling } from "react-icons/fa";
import PageHero from "./PageHero";
import CtaBand from "./CtaBand";
import "./DestinationStyles.css";

const PROGRAMS = [
    {
        id: "shg-training",
        title: "Self Help Group (SHG) Training",
        text: "Experience grassroots empowerment through our SHG program that connects women with community-led savings and investment opportunities.",
        points: ["Savings culture development", "Community-led solutions", "Social support networks"],
        image: WomenSaving,
        alt: "A woman holding a baby during a Self Help Group session",
    },
    {
        id: "safety-training",
        title: "Safety & Power Training",
        text: "Addressing Sexual Reproductive Health and Rights and Gender-Based Violence through education, dialogue, and empowerment.",
        points: ["Rights awareness education", "Confidence building workshops", "Safety pathways guidance"],
        image: WomenTraining,
        alt: "Women taking notes during a training workshop",
    },
    {
        id: "leadership",
        headingId: "community",
        title: "Leadership & Community Empowerment",
        text: "Nurture women leaders who champion change in their families and communities — building unity, inclusion, and collective progress.",
        points: ["Leadership development", "Community mobilization", "Transformative action plans"],
        image: Leadership,
        alt: "A facilitator reviewing notes with women in a community group",
    },
];

const Destination = () => {
    return (
        <div className="programs">
            <PageHero
                id="programs-title"
                kicker="Our Programs"
                title="Empowering Women & Communities"
                lead="Comprehensive training and support programs designed to transform lives"
            />

            {/* Current programs */}
            <section className="section programs-list" aria-label="Current programs">
                <div className="container">
                    {PROGRAMS.map((program, index) => (
                        <article
                            className={`split programs-list__item${index % 2 === 1 ? " split--reverse" : ""}`}
                            id={program.id}
                            key={program.id}
                        >
                            <div className="split__body">
                                <h2 id={program.headingId} className="programs-list__title">{program.title}</h2>
                                <p>{program.text}</p>
                                <ul className="check-list">
                                    {program.points.map((point) => <li key={point}>{point}</li>)}
                                </ul>
                            </div>
                            <figure className="split__media media programs-list__media">
                                <img src={program.image} alt={program.alt} width="1920" height="1280" loading="lazy" />
                            </figure>
                        </article>
                    ))}
                </div>
            </section>

            {/* Future Programs */}
            <section className="section section--alt programs-future" aria-labelledby="future-programs-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="future-programs-title">Future Programs</h2>
                        <p className="lead">Expanding Our Impact</p>
                    </div>
                    <div className="programs-future__grid">
                        <article className="card programs-future__card">
                            <span className="icon-mark" aria-hidden="true"><FaSeedling /></span>
                            <h3>Adolescent Girls Mentorship</h3>
                            <p>Empowering the next generation of women leaders through mentorship and guidance programs.</p>
                            <span className="tag">In Development</span>
                        </article>
                        <article className="card programs-future__card">
                            <span className="icon-mark" aria-hidden="true"><FaBriefcase /></span>
                            <h3>Women-Led Microenterprise Support</h3>
                            <p>Supporting women entrepreneurs through social enterprise development and business skills training.</p>
                            <span className="tag">In Development</span>
                        </article>
                    </div>
                </div>
            </section>

            <CtaBand />
        </div>
    );
};

export default Destination;
