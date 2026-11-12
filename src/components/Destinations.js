import WomenSaving from "../assets/Tw3.JPG";
import WomenTraining from "../assets/Tw2.JPG";
import Leadership from "../assets/Tw1.JPG";
import { FaBriefcase, FaSeedling } from "react-icons/fa";
import "./DestinationStyles.css";

/*
 * Programs. Used as the /programs page, and embedded on the home page
 * (`embedded`), where every heading drops one level so the page keeps a
 * single <h1>.
 */
const Destination = ({ embedded = false }) => {
    const Title = embedded ? "h2" : "h1";
    const SectionHeading = embedded ? "h3" : "h2";
    const ItemHeading = embedded ? "h4" : "h3";

    const intro = (
        <>
            <p className="kicker">Our Programs</p>
            <Title className={embedded ? "heading-2" : undefined}>Empowering Women &amp; Communities</Title>
            <p className="lead">Comprehensive training and support programs designed to transform lives</p>
        </>
    );

    return (
        <div className="programs">
            {!embedded && (
                <header className="page-header">
                    <div className="container">{intro}</div>
                </header>
            )}

            <section className={`section programs-list${embedded ? " section--ruled" : ""}`} aria-label="Current programs">
                <div className="container">
                    {embedded && <div className="section-header">{intro}</div>}

                    {/* Self Help Group Training */}
                    <article className="split" id="shg-training">
                        <div className="split__body">
                            <SectionHeading className="heading-2 programs-list__title">Self Help Group (SHG) Training</SectionHeading>
                            <p>
                                Experience grassroots empowerment through our SHG program that connects women with community-led savings and investment opportunities.
                            </p>
                            <ul className="check-list">
                                <li>Savings culture development</li>
                                <li>Community-led solutions</li>
                                <li>Social support networks</li>
                            </ul>
                        </div>
                        <figure className="split__media media">
                            <img src={WomenSaving} alt="A woman holding a baby during a Self Help Group session" width="1920" height="1280" loading="lazy" />
                        </figure>
                    </article>

                    {/* Safety & Power Training */}
                    <article className="split split--reverse" id="safety-training">
                        <div className="split__body">
                            <SectionHeading className="heading-2 programs-list__title">Safety &amp; Power Training</SectionHeading>
                            <p>
                                Addressing Sexual Reproductive Health and Rights and Gender-Based Violence through education, dialogue, and empowerment.
                            </p>
                            <ul className="check-list">
                                <li>Rights awareness education</li>
                                <li>Confidence building workshops</li>
                                <li>Safety pathways guidance</li>
                            </ul>
                        </div>
                        <figure className="split__media media">
                            <img src={WomenTraining} alt="Women taking notes during a training workshop" width="1920" height="1280" loading="lazy" />
                        </figure>
                    </article>

                    {/* Leadership & Community Empowerment */}
                    <article className="split" id="leadership">
                        <div className="split__body">
                            <SectionHeading id="community" className="heading-2 programs-list__title">Leadership &amp; Community Empowerment</SectionHeading>
                            <p>
                                Nurture women leaders who champion change in their families and communities — building unity, inclusion, and collective progress.
                            </p>
                            <ul className="check-list">
                                <li>Leadership development</li>
                                <li>Community mobilization</li>
                                <li>Transformative action plans</li>
                            </ul>
                        </div>
                        <figure className="split__media media">
                            <img src={Leadership} alt="A facilitator reviewing notes with women in a community group" width="1920" height="1280" loading="lazy" />
                        </figure>
                    </article>
                </div>
            </section>

            {/* Future Programs */}
            <section className="section section--alt programs-future" aria-labelledby="future-programs-title">
                <div className="container">
                    <div className="section-header">
                        <SectionHeading id="future-programs-title" className="heading-2">Future Programs</SectionHeading>
                        <p className="lead">Expanding Our Impact</p>
                    </div>
                    <div className="programs-future__grid">
                        <article className="card programs-future__card">
                            <span className="icon-mark" aria-hidden="true"><FaSeedling /></span>
                            <ItemHeading className="heading-3">Adolescent Girls Mentorship</ItemHeading>
                            <p>Empowering the next generation of women leaders through mentorship and guidance programs.</p>
                            <span className="tag">In Development</span>
                        </article>
                        <article className="card programs-future__card">
                            <span className="icon-mark" aria-hidden="true"><FaBriefcase /></span>
                            <ItemHeading className="heading-3">Women-Led Microenterprise Support</ItemHeading>
                            <p>Supporting women entrepreneurs through social enterprise development and business skills training.</p>
                            <span className="tag">In Development</span>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Destination;
