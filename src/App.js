import React, { useEffect, useRef } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsOfService from "./routes/TermsOfService";
import Destination from "./components/Destinations";
import Impact from "./components/Impact";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import Newsletter from "./components/Newsletter";

/*
 * Scroll to the top on every page change, or to the #fragment when a link
 * targets a section (e.g. /programs#shg-training from the footer).
 * After an in-app page change, keyboard/screen-reader focus moves to <main>.
 */
function ScrollManager() {
  // `key` changes on every navigation — including a link to the page you are
  // already on — so those clicks also return to the top.
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const pageChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const main = document.getElementById("main");
    if (pageChanged && !hash && main) main.focus({ preventScroll: true });

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView();
      }, 0);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return undefined;
  }, [pathname, hash, key]);

  return null;
}

function skipToContent(event) {
  const main = document.getElementById("main");
  if (!main) return;
  event.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView();
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="App">
        <a href="#main" className="skip-link" onClick={skipToContent}>
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Destination />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
