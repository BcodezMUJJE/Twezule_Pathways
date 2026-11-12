import React from "react";
import PageHero from "../components/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero id="privacypolicy-title" size="compact" title="Privacy Policy" />
      <section className="section">
        <div className="container container--narrow prose">
          <p>
            This page is a placeholder. Add your organization’s privacy policy details here (what data you collect,
            how it’s used, who it’s shared with, and how users can contact you about privacy).
          </p>
        </div>
      </section>
    </>
  );
}
