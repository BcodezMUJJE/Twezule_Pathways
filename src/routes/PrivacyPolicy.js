import React from "react";

export default function PrivacyPolicy() {
  return (
    <section style={{ padding: "var(--section-padding) 0", backgroundColor: "var(--background-white)" }}>
      <div className="content-wrapper">
        <h1 style={{ fontFamily: "var(--font-heading)", color: "var(--plum)", marginBottom: "1rem" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-medium)", maxWidth: "900px", lineHeight: 1.8 }}>
          This page is a placeholder. Add your organization’s privacy policy details here (what data you collect,
          how it’s used, who it’s shared with, and how users can contact you about privacy).
        </p>
      </div>
    </section>
  );
}
