import React from "react";
import "./DonateStyles.css";

const Donate = () => {
    return (
        <div className="donate-container">
            <section className="donate-header">
                <div className="content-wrapper">
                    <h1 className="donate-title">Donate</h1>
                    <p className="donate-intro">
                        Your generosity fuels our mission to empower women and transform communities across Uganda.
                    </p>
                </div>
            </section>

            <section className="donate-content">
                <div className="content-wrapper">
                    <div className="donate-info">
                        <h2>Why Your Donation Matters</h2>
                        <p>
                            Every contribution, no matter the size, helps us provide education, mentorship,
                            and resources to women in need. Your support directly impacts lives and
                            creates lasting change in communities across Uganda.
                        </p>

                        <div className="donation-impact-grid">
                            <div className="impact-item">
                                <span className="impact-amount">$25</span>
                                <p>Provides school supplies for one student for a term</p>
                            </div>
                            <div className="impact-item">
                                <span className="impact-amount">$50</span>
                                <p>Funds a mentorship session for a group of women</p>
                            </div>
                            <div className="impact-item">
                                <span className="impact-amount">$100</span>
                                <p>Supports a woman through a full skills training program</p>
                            </div>
                            <div className="impact-item">
                                <span className="impact-amount">$250</span>
                                <p>Sponsors a community workshop reaching dozens of families</p>
                            </div>
                        </div>
                    </div>

                    <div className="donate-cta-section">
                        <h2>How to Donate</h2>
                        <p>
                            We are currently setting up secure online donation options. In the meantime,
                            please reach out to us directly to arrange your contribution.
                        </p>
                        <a href="/contact" className="donate-contact-button">
                            <span>Contact Us to Donate</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donate;
