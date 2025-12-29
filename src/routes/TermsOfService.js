import React from "react";

export default function TermsOfService() {
  return (
    <section style={{ padding: "var(--section-padding) 0", backgroundColor: "var(--background-white)" }}>
      <div className="content-wrapper">
        <h1 style={{ fontFamily: "var(--font-heading)", color: "var(--plum)", marginBottom: "1rem" }}>
          Terms of Service
        </h1>
        <p style={{ color: "var(--text-medium)", maxWidth: "900px", lineHeight: 1.8 }}>
          This page is a placeholder. Add your website terms here (acceptable use, disclaimers, limitations,
          and contact information).
        </p>
      </div>
    </section>
  );
}
