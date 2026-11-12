import React from "react";
import { FaPiggyBank, FaHome, FaGraduationCap, FaHandshake, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import "./ImpactStyles.css";
import PageHero from "./PageHero";
import CtaBand from "./CtaBand";
import StoryOneImg from "../assets/Tw4.JPG";
import StoryTwoImg from "../assets/Tw6.JPG";
import StoryThreeImg from "../assets/Tw2.JPG";

const HIGHLIGHTS = [
    { icon: FaUsers, title: "Women Empowered", description: "Self Help Groups formed and strengthened" },
    { icon: FaPiggyBank, title: "Savings Mobilized", description: "Community savings and investments generated" },
    { icon: FaHome, title: "Communities Reached", description: "Villages and communities transformed" },
    { icon: FaGraduationCap, title: "Leaders Trained", description: "Women equipped with leadership skills" },
];

const STORIES = [
    {
        title: "Building Dreams Through Savings",
        text: "Experience the transformation as women come together through Self Help Groups, learning to save collectively and support one another in building sustainable businesses and securing their children's education.",
        points: ["Financial independence through collective savings", "Community support networks", "Business development opportunities"],
        location: "Kampala Region",
        image: StoryOneImg,
        alt: "Women in a Self Help Group meeting, one smiling and clapping",
    },
    {
        title: "Finding Her Voice",
        text: "Witness how leadership training empowers women to speak up in their communities, advocate for women's rights, and become catalysts for positive change in their villages and beyond.",
        points: ["Confidence building workshops", "Women's rights advocacy", "Community leadership roles"],
        location: "Rural Uganda",
        image: StoryTwoImg,
        alt: "Women taking part in an interactive leadership training session",
    },
    {
        title: "Knowledge is Power",
        text: "Discover how education about rights and safety equips women with essential tools for self-protection and creates a strong network of support throughout the community.",
        points: ["Rights awareness education", "Safety training programs", "Community support networks"],
        location: "Central Uganda",
        image: StoryThreeImg,
        alt: "Women taking notes during a safety training workshop",
    },
];

const Impact = () => {
    return (
        <div className="impact">
            {/* Header */}
            <PageHero
                id="impact-title"
                kicker="Creating Lasting Change"
                title="Our Impact: Stories of Women Rising"
                lead="Witnessing transformation, one woman and one community at a time"
            />

            {/* Highlights */}
            <section className="section" aria-labelledby="impact-highlights-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="impact-highlights-title">Our Growing Impact</h2>
                    </div>
                    <ul className="impact-metrics">
                        {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                            <li className="impact-metrics__item" key={title}>
                                <span className="icon-mark" aria-hidden="true"><Icon /></span>
                                <h3>{title}</h3>
                                <p className="impact-metrics__pending">Impact data coming soon</p>
                                <p className="impact-metrics__description">{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Stories from the Field */}
            <section className="section section--alt" aria-labelledby="impact-stories-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="impact-stories-title">Stories from the Field</h2>
                        <p className="lead">Real stories of transformation, resilience, and hope from the women we serve</p>
                    </div>

                    {STORIES.map((story, index) => (
                        <article className={`split${index % 2 === 1 ? " split--reverse" : ""}`} key={story.title}>
                            <div className="split__body">
                                <h3 className="heading-2 impact-story__title">{story.title}</h3>
                                <p>{story.text}</p>
                                <ul className="check-list">
                                    {story.points.map((point) => <li key={point}>{point}</li>)}
                                </ul>
                                <span className="tag"><FaMapMarkerAlt aria-hidden="true" /> {story.location}</span>
                            </div>
                            <figure className="split__media media">
                                <img src={story.image} alt={story.alt} width="1920" height="1280" loading="lazy" />
                            </figure>
                        </article>
                    ))}

                    <p className="impact-stories__note">More impact stories coming soon. Follow our journey of transformation!</p>
                </div>
            </section>

            {/* Partnerships */}
            <section className="section" aria-labelledby="impact-partners-title">
                <div className="container">
                    <div className="section-header">
                        <h2 id="impact-partners-title">Strategic Partnerships &amp; Collaborations</h2>
                        <p className="lead">
                            Building meaningful alliances with leading organizations to scale impact and create sustainable change for women across Uganda and beyond.
                        </p>
                    </div>

                    <div className="impact-partners">
                        <article className="card impact-partner">
                            <span className="impact-partner__mark" aria-hidden="true">SBS</span>
                            <h3>Street Business School</h3>
                            <p>
                                A transformative partnership focused on entrepreneurship training and women's economic empowerment.
                                Together, we deliver comprehensive business skills development programs that have empowered thousands of women across Uganda to build sustainable enterprises and achieve financial independence.
                            </p>
                        </article>

                        <article className="card impact-partner">
                            <span className="impact-partner__mark" aria-hidden="true">Omprakash</span>
                            <h3>Omprakash Foundation</h3>
                            <p>
                                Our global impact partner connecting us with passionate volunteers, dedicated donors, and like-minded organizations worldwide.
                                Through their platform, we amplify our mission and expand our reach, ensuring grassroots women's empowerment initiatives receive the support and visibility they deserve.
                            </p>
                        </article>

                        <article className="card impact-partner impact-partner--open">
                            <span className="icon-mark" aria-hidden="true"><FaHandshake /></span>
                            <h3>Partnership Opportunities</h3>
                            <p>
                                We actively seek strategic partnerships with organizations that share our commitment to women's empowerment and community development.
                                Join us in creating scalable, sustainable solutions that transform lives and build stronger, more equitable communities across East Africa and beyond.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <CtaBand />
        </div>
    );
};

export default Impact;
