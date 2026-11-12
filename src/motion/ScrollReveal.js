import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Scroll reveals for the whole site, configured in one place.
 *
 * After each page renders (before it is painted), matching elements are
 * marked with data-reveal; an IntersectionObserver adds .is-revealed the first
 * time each one enters the viewport. Elements reveal once and are never hidden
 * again. Under prefers-reduced-motion nothing is marked, so everything is
 * simply visible. The styles live in src/styles.css ("Motion").
 *
 * Each rule: [selector, type, stagger]
 *   type     "up" (fade-up) · "fade" · "left" · "right" · "image"
 *   stagger  true → siblings matched by the same rule enter one after another
 */
const RULES = [
  // Shared
  [".section-header", "up"],
  [".feature-grid > .feature", "up", true],
  [".split__body", "up"],
  [".split__media", "image"],
  [".stat-row > .stat", "up", true],
  [".cta-band__copy", "up"],
  [".cta-band__actions", "fade"],

  // Home
  [".home-programs__grid > li", "up", true],
  [".home-video__frame", "up"],
  [".home-leaders__quote blockquote", "up"],
  [".home-leaders__people > .person", "right", true],
  [".home-cta__copy", "up"],
  [".home-cta__ways li", "up", true],

  // About
  [".about-founding__statement", "up"],
  [".about-founding__highlights > li", "up", true],
  [".about-team__member", "up"],

  // Programs, Impact
  [".programs-future__grid > .card", "up", true],
  [".impact-metrics > li", "up", true],
  [".impact-partners > .card", "up", true],
  [".impact-stories__note", "fade"],

  // Get Involved, Contact, Donate
  [".gi-ways > .card", "up", true],
  [".gi-donate", "up"],
  [".gi-contact__form", "up"],
  [".gi-contact__info", "up"],
  [".contact-form-card", "up"],
  [".contact-details .info-list > li", "up", true],
  [".contact-map", "up"],
  [".donate-levels__item", "up", true],
  [".donate-how", "up"],

  // Newsletter
  [".nl-aside", "fade"],
  [".nl-section", "up"],
  [".nl-callout", "up"],
  [".nl-pages > li", "up", true],

  // Footer (persists across pages, so it reveals once per visit)
  [".site-footer__grid > *", "up", true],
  [".site-footer__bottom", "fade"],
];

const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 5;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) return undefined;

    const timers = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-revealed");
          observer.unobserve(el);
          // Once the entrance has finished, drop the reveal styles so the
          // element's own hover/focus transitions apply again unchanged.
          const delay = parseInt(el.style.getPropertyValue("--reveal-delay"), 10) || 0;
          const timer = window.setTimeout(() => {
            el.removeAttribute("data-reveal");
            el.style.removeProperty("--reveal-delay");
            timers.delete(timer);
          }, delay + 1500);
          timers.add(timer);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    RULES.forEach(([selector, type, stagger]) => {
      const groups = new Map();
      document.querySelectorAll(selector).forEach((el) => {
        if (el.closest(".page-hero")) return;            // the hero has its own entrance
        if (el.classList.contains("is-revealed")) return; // already shown (e.g. footer)
        if (el.parentElement && el.parentElement.closest("[data-reveal]")) return; // no nested reveals
        el.setAttribute("data-reveal", type);
        if (stagger) {
          const index = groups.get(el.parentElement) || 0;
          groups.set(el.parentElement, index + 1);
          el.style.setProperty("--reveal-delay", `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
        }
        observer.observe(el);
      });
    });

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathname]);

  return null;
}
