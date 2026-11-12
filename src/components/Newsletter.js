import React from "react";
import { FaDownload } from "react-icons/fa";
import "./NewsletterStyles.css";
import newsletterPDF from "../assets/Twezule Pathways Quartely News Lettert (4) (1).pdf";

export default function Newsletter() {
  return (
    <div className="newsletter">
      {/* Page Header */}
      <header className="page-header newsletter__header">
        <div className="container newsletter__header-inner">
          <div>
            <p className="kicker">Twezule Pathways</p>
            <h1>Our Newsletter</h1>
            <p className="lead">
              Q1 2026 &mdash; <em>Seeds of Hope</em>
            </p>
          </div>
          <a
            href={newsletterPDF}
            download="Twezule_Pathways_Q1_2026_Newsletter.pdf"
            className="btn btn--primary"
          >
            <FaDownload aria-hidden="true" /> Download Newsletter PDF
          </a>
        </div>
      </header>

      {/* PDF Viewer */}
      <section className="newsletter__viewer" aria-label="Newsletter document">
        <div className="container">
          <iframe
            src={newsletterPDF}
            title="Twezule Pathways Q1 2026 Newsletter"
            className="newsletter__frame"
          />
        </div>
      </section>
    </div>
  );
}
