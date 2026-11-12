import React from "react";
import { Link } from "react-router-dom";
import "./DonateStyles.css";
import PageHero from "./PageHero";

const IMPACT_LEVELS = [
    { amount: "$25", text: "Provides school supplies for one student for a term" },
    { amount: "$50", text: "Funds a mentorship session for a group of women" },
    { amount: "$100", text: "Supports a woman through a full skills training program" },
    { amount: "$250", text: "Sponsors a community workshop reaching dozens of families" },
];

const Donate = () => {
    return (
        <div className="donate">
            <PageHero
                id="donate-title"
                title="Donate"
                lead="Your generosity fuels our mission to empower women and transform communities across Uganda."
            />

            <section className="section">
                <div className="container donate-grid">
                    <div className="donate-info">
                        <h2>Why Your Donation Matters</h2>
                        <p className="donate-info__text">
                            Every contribution, no matter the size, helps us provide education, mentorship,
                            and resources to women in need. Your support directly impacts lives and
                            creates lasting change in communities across Uganda.
                        </p>

                        <dl className="donate-levels">
                            {IMPACT_LEVELS.map((level) => (
                                <div className="donate-levels__item" key={level.amount}>
                                    <dt className="donate-levels__amount">{level.amount}</dt>
                                    <dd>{level.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <aside className="card donate-how" aria-labelledby="donate-how-title">
                        <h2 id="donate-how-title" className="heading-3">How to Donate</h2>
                        <p>
                            We are currently setting up secure online donation options. In the meantime,
                            please reach out to us directly to arrange your contribution.
                        </p>
                        <Link to="/contact" className="btn btn--primary btn--block">
                            Contact Us to Donate
                        </Link>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Donate;
