import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import TwezuleLogo from "../assets/TwezuleLogo.png";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";
const DESKTOP_QUERY = "(min-width: 1080px)";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const close = useCallback(() => setOpen(false), []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open: Escape closes, background does not scroll, and resizing to
  // desktop width resets the menu
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia(DESKTOP_QUERY);
    const onMediaChange = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onMediaChange);
    document.body.classList.add("nav-open");

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onMediaChange);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main">
        <Link to="/" className="site-nav__brand" aria-label="Twezule Pathways home" onClick={close}>
          <img
            src={TwezuleLogo}
            alt="Twezule Pathways"
            className="site-nav__logo"
            width="1024"
            height="1024"
          />
        </Link>

        <button
          type="button"
          className="site-nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className="site-nav__toggle-bar" aria-hidden="true"></span>
          <span className="site-nav__toggle-bar" aria-hidden="true"></span>
          <span className="site-nav__toggle-bar" aria-hidden="true"></span>
        </button>

        <div id="primary-navigation" className={`site-nav__panel${open ? " is-open" : ""}`}>
          <ul className="site-nav__links">
            {MenuItems.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} end={item.url === "/"} className="site-nav__link" onClick={close}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="site-nav__actions">
            <NavLink to="/get-involved" className="btn btn--secondary btn--sm site-nav__action" onClick={close}>
              Get Involved
            </NavLink>
            <a
              href={DONATE_URL}
              className="btn btn--primary btn--sm site-nav__action"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
            >
              Donate
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
