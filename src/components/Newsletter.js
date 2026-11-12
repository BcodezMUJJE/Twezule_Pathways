import React from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import "./NewsletterStyles.css";
import PageHero from "./PageHero";
import CtaBand from "./CtaBand";
import newsletterPDF from "../assets/Twezule Pathways Quartely News Lettert (4) (1).pdf";
import LeadersImg from "../assets/newsletter/q1-2026/leaders.jpg";
import CommunityImg from "../assets/newsletter/q1-2026/community.jpg";
import PoultryImg from "../assets/newsletter/q1-2026/poultry.jpg";
import PageOneImg from "../assets/newsletter/q1-2026/page-1.jpg";
import PageTwoImg from "../assets/newsletter/q1-2026/page-2.jpg";

/*
 * Q1 2026 newsletter, published as a web article. The text is taken
 * verbatim from the PDF edition; the PDF stays available to view and download.
 * To publish a new issue, update ISSUE, the article sections and the images.
 */
const ISSUE = {
  label: "Q1 2026",
  theme: "Seeds of Hope",
  pdf: newsletterPDF,
  pdfName: "Twezule_Pathways_Q1_2026_Newsletter.pdf",
  pdfSize: "1.2 MB",
  pages: [
    { src: PageOneImg, alt: "Page 1 of the Q1 2026 newsletter" },
    { src: PageTwoImg, alt: "Page 2 of the Q1 2026 newsletter" },
  ],
};

const CONTENTS = [
  { id: "message", title: "A Heartfelt Message to Our Friends" },
  { id: "seeds-of-hope", title: "Seeds of Hope in Action" },
  { id: "partner-spotlight", title: "Partner Spotlight" },
  { id: "looking-ahead", title: "Looking Ahead and Call to Action" },
  { id: "member-spotlight", title: "Member Spotlight: Nalongo’s Quiet Power" },
];

const NewTab = () => <span className="visually-hidden"> (opens in a new tab)</span>;

export default function Newsletter() {
  return (
    <div className="newsletter">
      <PageHero
        id="newsletter-title"
        kicker={`${ISSUE.label} Newsletter`}
        title={ISSUE.theme}
        lead="Celebrating our first year with news from the Afaayo group, our first corporate partner, and one member’s story of unity."
      >
        <Link to="#issue" className="btn btn--primary">Read the Newsletter</Link>
        <a href={ISSUE.pdf} download={ISSUE.pdfName} className="btn btn--secondary">
          <FaDownload aria-hidden="true" /> Download PDF
        </a>
      </PageHero>

      <section className="section nl-issue" id="issue" aria-label={`${ISSUE.label} newsletter: ${ISSUE.theme}`}>
        <div className="container nl-layout">
          {/* ---- Sidebar: contents + issue details ---- */}
          <aside className="nl-aside">
            <nav aria-labelledby="nl-contents-title">
              <h2 id="nl-contents-title" className="nl-aside__title">In this issue</h2>
              <ol className="nl-contents">
                {CONTENTS.map((item) => (
                  <li key={item.id}>
                    <Link to={`#${item.id}`}>{item.title}</Link>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="nl-aside__card">
              <p className="nl-aside__meta">
                <strong>{ISSUE.label}</strong> edition, {ISSUE.pages.length} pages, PDF {ISSUE.pdfSize}
              </p>
              <a href={ISSUE.pdf} download={ISSUE.pdfName} className="btn btn--primary btn--sm btn--block">
                <FaDownload aria-hidden="true" /> Download PDF
              </a>
              <a href={ISSUE.pdf} target="_blank" rel="noopener noreferrer" className="nl-aside__link">
                Open the original PDF <FaExternalLinkAlt aria-hidden="true" /><NewTab />
              </a>
            </div>
          </aside>

          {/* ---- The article ---- */}
          <article className="nl-article">
            <section className="nl-section" id="message" aria-labelledby="message-title">
              <h2 id="message-title">A Heartfelt Message to Our Friends</h2>
              <figure className="nl-figure nl-figure--aside">
                <img src={LeadersImg} alt="Two women smiling together outdoors" width="605" height="807" loading="lazy" />
              </figure>
              <p>Dear Friends,</p>
              <p>
                As we wrap up the first quarter of 2026, we also celebrate the one-year anniversary of Twezule Pathways!
                This past year has not only challenged our self-confidence but has also reinforced our belief in the
                transformative power of women to change their lives and communities. More significantly, it has
                highlighted how deeply you, our friends and partners, believe in this mission.
              </p>
              <p>
                We step into this new year with renewed confidence, knowing that together we can empower women to rise,
                support their families, and lead change in their communities.
              </p>
            </section>

            <section className="nl-section" id="seeds-of-hope" aria-labelledby="seeds-title">
              <h2 id="seeds-title">Seeds of Hope in Action</h2>
              <p>
                Under our 2026 theme, “Seeds of Hope”, we are working towards reaching at least 400 women and their 500
                children through entrepreneurship training, Self Help Group formation, development of group social
                enterprises and promoting an enabling environment.
              </p>
              <p>
                Our pilot group Afaayo, has completed the entrepreneurship phase using the{" "}
                <a href="https://www.streetbusinessschool.org/" target="_blank" rel="noopener noreferrer" className="link">
                  Street Business School<NewTab />
                </a>{" "}
                proven curriculum with over 25 women set to graduate in April 2026.
              </p>
              <p>
                One of the most encouraging outcomes was that 90% of the class voluntarily signed up to form a formal
                Self Help Group (SHG). This is a sign of the need for partnership and commitment. During leadership
                elections, members thoughtfully and honestly reflected on the kind of leadership they want, recognizing
                its importance in building strong, transparent groups.
              </p>
              <figure className="nl-figure nl-figure--wide">
                <img src={CommunityImg} alt="Women gathered outdoors at a community meeting" width="605" height="807" loading="lazy" />
              </figure>
            </section>

            <aside className="nl-callout" id="partner-spotlight" aria-labelledby="partner-title">
              <h2 id="partner-title" className="nl-callout__title">Partner Spotlight</h2>
              <p>
                We are excited to share that Twezule Pathways secured her first corporate Partner;{" "}
                <a href="https://microtrace.de/index.php?id=2" target="_blank" rel="noopener noreferrer" className="link">
                  MicroTrace Minerals<NewTab />
                </a>
                . This partnership reflects the growing confidence in locally-led solutions that empower women at
                community level. We look forward to building more partnerships with organizations that share our mission.
              </p>
            </aside>

            <section className="nl-section" id="looking-ahead" aria-labelledby="looking-ahead-title">
              <h2 id="looking-ahead-title">Looking Ahead and Call to Action</h2>
              <p>
                Inspired by Afaayo group’s progress and your continued support, we are expanding to two new communities
                this quarter. We look forward to sharing more updates in the coming months. We remain deeply grateful for
                your support through the Seeds of Hope campaign that will enable us reach about 70% of our 2026 goal.
              </p>
              <p>As members of the Founding Circle, we invite you to continue walking this journey with us by:</p>
              <ul className="check-list nl-list">
                <li>Sharing Twezule’s story within your networks.</li>
                <li>Connecting us to potential partners and funders</li>
                <li>Continuing to champion women’s empowerment</li>
              </ul>
              <div className="nl-live">
                <p className="nl-live__title">We’re Live!</p>
                <p>
                  Twezule Pathways now has a home online. Explore our work, stories, and impact at:{" "}
                  <Link to="/">www.twezulepathways.org</Link>
                </p>
              </div>
            </section>

            <section className="nl-section" id="member-spotlight" aria-labelledby="member-title">
              <p className="kicker nl-section__kicker">Member spotlight</p>
              <h2 id="member-title">Nalongo’s quiet power: How unity turned possibility into progress</h2>
              <p>
                At 33 years old, Barbra—fondly known as Nalongo, the proud mother of three children including twins—has
                become a quiet but powerful force for change in her community. Group members testify of her calm
                leadership and belief in unity. Barbra brings people together and reminds them that their collective
                strength is their greatest asset. Babra is a permanent resident of Nkokonjeru which was a key election
                criterion.
              </p>
              <p>
                I addition to her leadership skills, Babra is hardworking and exemplifies the virtue of unity. Before
                joining Twezule Pathways, Barbra and two of her close friends, Norah and Senga, shared the same struggle
                faced by many women in their community: they had ideas but no income and believed they needed a large
                amount of capital to begin. Using the Street Business School training model that Twezule adopted and the
                solidarity of the Afaayo Self Help Group, that belief changed. Today, Barbra and her friends are running
                two small but growing businesses—a poultry farm and a vegetable garden where they cultivate sukumawiki
                (kale) to improve nutrition in their community while generating income.
              </p>
              <blockquote className="nl-pullquote" aria-hidden="true">
                <p>“Once you are united in thought, the journey becomes easy.”</p>
              </blockquote>
              <p>
                When she is not caring for her children or coordinating group activities, Barbra spends time in the
                garden with fellow members, tending the vegetables that represent both nourishment and possibility.
                Their group savings boxes are already beginning to grow. “We have just started, and we are already
                seeing money in our savings boxes,” she says with pride. For Barbra, entrepreneurship is not just about
                business—it is about dignity, justice, and action: women rising together to claim their rights and build
                brighter futures for themselves and their families.
              </p>
              <p>
                Barbra dreams not only for herself but for every woman in her group. “I see our group developing, owning
                a bank account, women working hard and becoming independent, not dependent on their spouses,” she says.
                Babra reminds her fellow members, “Once you are united in thought, the journey becomes easy.”
              </p>
              <figure className="nl-figure nl-figure--wide">
                <img src={PoultryImg} alt="Two women holding chickens inside a poultry house" width="1210" height="908" loading="lazy" />
              </figure>
              <p className="nl-signoff">Together we Rise</p>
            </section>
          </article>
        </div>
      </section>

      {/* ---- The original designed edition ---- */}
      <section className="section section--alt nl-original" aria-labelledby="nl-original-title">
        <div className="container">
          <div className="nl-original__header">
            <div className="section-header">
              <h2 id="nl-original-title">View the Original Newsletter</h2>
              <p className="lead">See the newsletter as it was designed, or download it to read offline and share.</p>
            </div>
            <div className="btn-group">
              <a href={ISSUE.pdf} download={ISSUE.pdfName} className="btn btn--primary">
                <FaDownload aria-hidden="true" /> Download PDF
              </a>
              <a href={ISSUE.pdf} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                Open PDF <FaExternalLinkAlt aria-hidden="true" /><NewTab />
              </a>
            </div>
          </div>
          <ul className="nl-pages">
            {ISSUE.pages.map((page, index) => (
              <li key={page.alt}>
                <a href={ISSUE.pdf} target="_blank" rel="noopener noreferrer" className="nl-page">
                  <img src={page.src} alt={`${page.alt} (opens the PDF in a new tab)`} width="640" height="905" loading="lazy" />
                  <span className="nl-page__label" aria-hidden="true">Page {index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
