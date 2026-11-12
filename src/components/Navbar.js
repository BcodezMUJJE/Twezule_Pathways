import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import TwezuleLogo from "../assets/TwezuleLogo.png";

const DONATE_URL = "https://www.omprakash.org/global/twezule-pathways";
const DESKTOP_QUERY = "(min-width: 1024px)";

// Pages that open with a dark hero (photo or Plum band): the bar starts
// transparent over it and turns solid white once the page scrolls.
const HERO_ROUTES = [
  "/", "/about", "/programs", "/impact", "/contact", "/get-involved",
  "/donate", "/newsletter", "/privacy-policy", "/terms-of-service",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const linksRef = useRef(null);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false, animate: false });

  const close = useCallback(() => setOpen(false), []);

  // Desktop: one pill slides to the current page's link. It is measured
  // before paint on every page change, resize and font load; the first
  // placement is instant, later moves glide.
  useLayoutEffect(() => {
    const list = linksRef.current;
    if (!list) return undefined;

    const measure = (animate) => {
      const active = list.querySelector(".site-nav__link.active");
      if (!active || !window.matchMedia(DESKTOP_QUERY).matches) {
        setIndicator((prev) => ({ ...prev, visible: false }));
        return;
      }
      const listBox = list.getBoundingClientRect();
      const box = active.getBoundingClientRect();
      setIndicator((prev) => ({
        x: box.left - listBox.left,
        width: box.width,
        visible: true,
        animate: animate && prev.visible,
      }));
    };

    measure(true);
    const onResize = () => measure(false);
    window.addEventListener("resize", onResize);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => measure(false));
    return () => window.removeEventListener("resize", onResize);
  }, [pathname]);

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

  const overlay = HERO_ROUTES.includes(pathname) && !scrolled && !open;

  const headerClass = [
    "site-header",
    overlay ? "is-overlay" : "",
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
          <ul className="site-nav__links" ref={linksRef}>
            <li
              className={`site-nav__indicator${indicator.visible ? " is-visible" : ""}${indicator.animate ? " is-animated" : ""}`}
              aria-hidden="true"
              style={{ "--indicator-x": `${indicator.x}px`, "--indicator-w": `${indicator.width}px` }}
            ></li>
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
            <NavLink to="/get-involved" className="btn btn--primary btn--block" onClick={close}>
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
          <NavLink to="/get-involved" className="site-nav__get-involved" onClick={close}>
            Get Involved
          </NavLink>
          <a
            href={DONATE_URL}
            className="btn btn--accent btn--sm site-nav__donate"
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
