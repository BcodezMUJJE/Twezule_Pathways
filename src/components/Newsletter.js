import React, { useState } from "react";
import "./NewsletterStyles.css";
import newsletterPDF from "../assets/Twezule Pathways Quartely News Lettert (4) (1).pdf";

const newsletters = [
  {
    id: "q1-2026",
    edition: "Q1 2026",
    date: "April 2026",
    theme: "Seeds of Hope",
    label: "Latest Issue",
    content: {
      heroMessage: {
        title: "A Heartfelt Message to Our Friends",
        body: [
          "Dear Friends,",
          "As we wrap up the first quarter of 2026, we also celebrate the one-year anniversary of Twezule Pathways! This past year has not only challenged our self-confidence but has also reinforced our belief in the transformative power of women to change their lives and communities. More significantly, it has highlighted how deeply you, our friends and partners, believe in this mission.",
          "We step into this new year with renewed confidence, knowing that together we can empower women to rise, support their families, and lead change in their communities."
        ]
      },
      seedsOfHope: {
        title: "Seeds of Hope in Action",
        body: [
          "Under our 2026 theme, \"Seeds of Hope\", we are working towards reaching at least 400 women and their 500 children through entrepreneurship training, Self Help Group formation, development of group social enterprises and promoting an enabling environment.",
          "Our pilot group Afaayo, has completed the entrepreneurship phase using the Street Business School proven curriculum with over 25 women set to graduate in April 2026.",
          "One of the most encouraging outcomes was that 90% of the class voluntarily signed up to form a formal Self Help Group (SHG). This is a sign of the need for partnership and commitment. During leadership elections, members thoughtfully and honestly reflected on the kind of leadership they want, recognizing its importance in building strong, transparent groups."
        ],
        stats: []
      },
      partnerSpotlight: {
        title: "Partner Spotlight",
        body: "We are excited to share that Twezule Pathways secured her first corporate Partner; MicroTrace Minerals. This partnership reflects the growing confidence in locally-led solutions that empower women at community level. We look forward to building more partnerships with organizations that share our mission."
      },
      lookingAhead: {
        title: "Looking Ahead & Call to Action",
        body: [
          "Inspired by Afaayo group's progress and your continued support, we are expanding to two new communities this quarter. We look forward to sharing more updates in the coming months.",
          "We remain deeply grateful for your support through the Seeds of Hope campaign that will enable us reach about 70% of our 2026 goal."
        ],
        callToAction: [
          "Sharing Twezule's story within your networks.",
          "Connecting us to potential partners and funders.",
          "Continuing to champion women's empowerment."
        ]
      },
      memberSpotlight: {
        title: "Member Spotlight",
        subtitle: "Nalongo's Quiet Power: How Unity Turned Possibility into Progress",
        tagline: "Together We Rise",
        body: [
          "At 33 years old, Barbra — fondly known as Nalongo, the proud mother of three children including twins — has become a quiet but powerful force for change in her community. Group members testify of her calm leadership and belief in unity. Barbra brings people together and reminds them that their collective strength is their greatest asset.",
          "Before joining Twezule Pathways, Barbra and two of her close friends, Norah and Senga, shared the same struggle faced by many women in their community: they had ideas but no income and believed they needed a large amount of capital to begin. Using the Street Business School training model that Twezule adopted and the solidarity of the Afaayo Self Help Group, that belief changed.",
          "Today, Barbra and her friends are running two small but growing businesses — a poultry farm and a vegetable garden where they cultivate sukumawiki (kale) to improve nutrition in their community while generating income.",
          "Their group savings boxes are already beginning to grow. \"We have just started, and we are already seeing money in our savings boxes,\" she says with pride. For Barbra, entrepreneurship is not just about business — it is about dignity, justice, and action: women rising together to claim their rights and build brighter futures for themselves and their families.",
          "Barbra dreams not only for herself but for every woman in her group. \"I see our group developing, owning a bank account, women working hard and becoming independent, not dependent on their spouses,\" she says.",
        ],
        quote: "\"Once you are united in thought, the journey becomes easy.\""
      }
    }
  }
];

export default function Newsletter() {
  const [activeNewsletter] = useState(newsletters[0]);
  const { content } = activeNewsletter;

  return (
    <div className="newsletter-page">
      {/* Page Header */}
      <section className="newsletter-header">
        <div className="newsletter-header-inner">
          <span className="newsletter-eyebrow">Twezule Pathways</span>
          <h1 className="newsletter-page-title">Our Newsletter</h1>
          <p className="newsletter-page-subtitle">
            Stories of impact, growth, and community from the ground up.
          </p>
        </div>
      </section>

      {/* Edition Banner */}
      <section className="newsletter-edition-banner">
        <div className="newsletter-container">
          <div className="edition-badge">{activeNewsletter.label}</div>
          <h2 className="edition-title">
            {activeNewsletter.edition} &mdash; <em>{activeNewsletter.theme}</em>
          </h2>
          <p className="edition-date">{activeNewsletter.date}</p>
        </div>
      </section>

      <div className="newsletter-container newsletter-body">

        {/* Heartfelt Message */}
        <section className="nl-section nl-message-card">
          <div className="nl-section-icon">✉</div>
          <h2 className="nl-section-title">{content.heroMessage.title}</h2>
          {content.heroMessage.body.map((para, i) => (
            <p key={i} className={`nl-paragraph ${i === 0 ? "nl-salutation" : ""}`}>{para}</p>
          ))}
        </section>

        {/* Seeds of Hope */}
        <section className="nl-section nl-seeds-section">
          <div className="nl-section-header">
            <div className="nl-section-icon">🌱</div>
            <h2 className="nl-section-title">{content.seedsOfHope.title}</h2>
          </div>
          {content.seedsOfHope.body.map((para, i) => (
            <p key={i} className="nl-paragraph">{para}</p>
          ))}
        </section>

        {/* Partner Spotlight */}
        <section className="nl-section nl-partner-spotlight">
          <div className="nl-partner-inner">
            <div className="nl-partner-badge">★ Partner Spotlight</div>
            <h2 className="nl-section-title">{content.partnerSpotlight.title}</h2>
            <p className="nl-paragraph">{content.partnerSpotlight.body}</p>
            <div className="nl-partner-name">
              <span>MicroTrace Minerals</span>
              <span className="nl-partner-tag">First Corporate Partner</span>
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="nl-section nl-looking-ahead">
          <div className="nl-section-header">
            <div className="nl-section-icon">🔭</div>
            <h2 className="nl-section-title">{content.lookingAhead.title}</h2>
          </div>
          {content.lookingAhead.body.map((para, i) => (
            <p key={i} className="nl-paragraph">{para}</p>
          ))}
          <div className="nl-cta-box">
            <p className="nl-cta-intro">
              As members of the Founding Circle, we invite you to continue walking this journey with us by:
            </p>
            <ul className="nl-cta-list">
              {content.lookingAhead.callToAction.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Member Spotlight */}
        <section className="nl-section nl-member-spotlight">
          <div className="nl-member-eyebrow">{content.memberSpotlight.title}</div>
          <h2 className="nl-section-title">{content.memberSpotlight.subtitle}</h2>
          <div className="nl-member-content">
            <div className="nl-member-text">
              {content.memberSpotlight.body.map((para, i) => (
                <p key={i} className="nl-paragraph">{para}</p>
              ))}
              <blockquote className="nl-member-quote">
                {content.memberSpotlight.quote}
              </blockquote>
            </div>
          </div>
          <div className="nl-tagline">{content.memberSpotlight.tagline}</div>
        </section>

        {/* PDF Document Embed */}
        <section className="nl-section nl-pdf-section">
          <h2 className="nl-section-title">📄 Read the Full Newsletter</h2>
          <p className="nl-paragraph nl-pdf-intro">
            View and download our official Q1 2026 newsletter below.
          </p>
          <div className="nl-pdf-wrapper">
            <iframe
              src={newsletterPDF}
              title="Twezule Pathways Q1 2026 Newsletter"
              className="nl-pdf-frame"
              aria-label="Twezule Pathways Q1 2026 Newsletter PDF"
            />
          </div>
          <a
            href={newsletterPDF}
            download="Twezule_Pathways_Q1_2026_Newsletter.pdf"
            className="nl-pdf-download-btn"
          >
            ⬇ Download Newsletter PDF
          </a>
        </section>

        {/* Website Live Banner */}
        <section className="nl-section nl-live-banner">
          <div className="nl-live-inner">
            <span className="nl-live-dot"></span>
            <div>
              <h3 className="nl-live-title">We're Live!</h3>
              <p className="nl-live-body">
                Twezule Pathways now has a home online. Explore our work, stories, and impact at{" "}
                <a
                  href="https://www.twezulepathways.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nl-live-link"
                >
                  www.twezulepathways.org
                </a>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
