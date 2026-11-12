import React from "react";
import PageHero from "../components/PageHero";

export default function TermsOfService() {
  return (
    <>
      <PageHero id="termsofservice-title" size="compact" title="Terms of Service" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            This page is a placeholder. Add your website terms here (acceptable use, disclaimers, limitations,
            and contact information).
          </p>
        </div>
      </section>
    </>
  );
}
