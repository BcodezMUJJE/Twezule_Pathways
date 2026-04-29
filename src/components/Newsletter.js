import React from "react";
import "./NewsletterStyles.css";
import newsletterPDF from "../assets/Twezule Pathways Quartely News Lettert (4) (1).pdf";

export default function Newsletter() {
  return (
    <div className="newsletter-page">
      {/* Page Header */}
      <section className="newsletter-header">
        <div className="newsletter-header-inner">
          <span className="newsletter-eyebrow">Twezule Pathways</span>
          <h1 className="newsletter-page-title">Our Newsletter</h1>
          <p className="newsletter-page-subtitle">
            Q1 2026 &mdash; <em>Seeds of Hope</em>
          </p>
        </div>
      </section>

      {/* PDF Viewer */}
      <div className="nl-pdf-page-wrapper">
        <iframe
          src={newsletterPDF}
          title="Twezule Pathways Q1 2026 Newsletter"
          className="nl-pdf-full-frame"
          aria-label="Twezule Pathways Q1 2026 Newsletter PDF"
        />
        <div className="nl-pdf-actions">
          <a
            href={newsletterPDF}
            download="Twezule_Pathways_Q1_2026_Newsletter.pdf"
            className="nl-pdf-download-btn"
          >
            ⬇ Download Newsletter PDF
          </a>
        </div>
      </div>
    </div>
  );
}
