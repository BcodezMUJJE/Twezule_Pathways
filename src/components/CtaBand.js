import { Link } from "react-router-dom";
import "./CtaBand.css";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";

/* Closing call to action shown at the end of content pages (Sage band) */
function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="container cta-band__inner">
        <div className="cta-band__copy">
          <h2 id="cta-band-title">Join us in lighting pathways of change</h2>
          <p>
            Be part of a movement that’s transforming lives and communities across Uganda.
            Every contribution, partnership, and voice matters.
          </p>
        </div>
        <div className="btn-group cta-band__actions">
          <a href={DONATE_URL} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
            Donate via Omprakash
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <Link to="/get-involved" className="btn btn--primary">Get Involved</Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
