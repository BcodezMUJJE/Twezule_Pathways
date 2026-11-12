import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import TwezuleLogo from "../assets/TwezuleLogo.png";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";
const DESKTOP_QUERY = "(min-width: 1024px)";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Show the header's bottom border only once the page has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: move focus into it, keep focus inside the
  // header (the rest of the page is made inert), lock background scrolling,
  // close on Escape (returning focus to the toggle) and on resize to desktop.
  useEffect(() => {
    if (!open) return undefined;

    const background = [
      document.querySelector(".skip-link"),
      document.getElementById("main"),
      document.querySelector(".site-footer"),
    ].filter(Boolean);
    background.forEach((el) => el.setAttribute("inert", ""));
    document.body.classList.add("nav-open");

    const firstLink = panelRef.current && panelRef.current.querySelector("a");
    if (firstLink) firstLink.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (toggleRef.current) toggleRef.current.focus();
      }
    };
    const media = window.matchMedia(DESKTOP_QUERY);
    const onMediaChange = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onMediaChange);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onMediaChange);
      background.forEach((el) => el.removeAttribute("inert"));
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    open ? "is-menu-open" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClass}>
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

        <div
          id="primary-navigation"
          ref={panelRef}
          className={`site-nav__panel${open ? " is-open" : ""}`}
        >
          <ul className="site-nav__links">
            {MenuItems.map((item) => (
              <li key={item.url}>
                <NavLink to={item.url} end={item.url === "/"} className="site-nav__link" onClick={close}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile & tablet only: secondary action and contact details */}
          <div className="site-nav__panel-footer">
            <NavLink to="/get-involved" className="btn btn--secondary btn--block" onClick={close}>
              Get Involved
            </NavLink>
            <ul className="site-nav__contact">
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:evelynmwondha@twezulepathways.org">evelynmwondha@twezulepathways.org</a>
              </li>
              <li>
                <FaPhoneAlt aria-hidden="true" />
                <a href="tel:+256772444876">+256 772 444 876</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-nav__actions">
          <NavLink to="/get-involved" className="btn btn--secondary btn--sm site-nav__get-involved" onClick={close}>
            Get Involved
          </NavLink>
          <a
            href={DONATE_URL}
            className="btn btn--primary btn--sm site-nav__donate"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Donate
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="site-nav__toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            <span className="site-nav__toggle-label">{open ? "Close" : "Menu"}</span>
            <span className="site-nav__toggle-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
