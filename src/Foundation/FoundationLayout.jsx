import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { branding } from "../config/branding";
import "../assets/foundation/_foundation.scss";

const navItems = [
  { to: "/", label: "Strona główna" },
  { to: "/o-nas", label: "O nas" },
  { to: "/projekty", label: "Projekty" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function FoundationLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="fn-root">
      <header className={`fn-header${scrolled ? " fn-header--scrolled" : ""}`}>
        {/* Top bar: logo + hamburger */}
        <div className="fn-header__inner">
          <NavLink to="/" className="fn-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo-nowyja.png" alt={branding.appName} />
          </NavLink>

          {/* Desktop nav — hidden on mobile via CSS */}
          <nav className="fn-nav fn-nav--desktop" aria-label="Nawigacja główna">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  "fn-nav__link" + (isActive ? " fn-nav__link--active" : "")
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/kontakt"
              className="fn-btn fn-btn--navy"
              style={{ marginLeft: "0.75rem", padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
            >
              Kontakt
            </NavLink>
          </nav>

          {/* Hamburger toggle — visible only on mobile */}
          <button
            className={`fn-nav-toggle${menuOpen ? " fn-nav-toggle--open" : ""}`}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile nav drawer — rendered inside header but fixed positioned */}
        <nav
          className={`fn-nav fn-nav--mobile${menuOpen ? " fn-nav--open" : ""}`}
          aria-label="Menu mobilne"
          aria-hidden={!menuOpen}
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                "fn-nav__link" + (isActive ? " fn-nav__link--active" : "")
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/kontakt"
            className="fn-btn fn-btn--navy fn-btn--mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Skontaktuj się →
          </NavLink>
        </nav>

        {/* Backdrop overlay */}
        {menuOpen && (
          <div
            className="fn-nav-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>

      <main className="fn-main">
        <Outlet />
      </main>

      <footer className="fn-footer">
        <div className="fn-container">
          <div className="fn-footer__grid">
            <div className="fn-footer__brand">
              <NavLink to="/" className="fn-logo" style={{ marginBottom: "0.5rem" }}>
                <img src="/logo-nowyja.png" alt={branding.appName} />
              </NavLink>
              <p className="fn-footer__tagline">{branding.tagline}</p>
            </div>
            <div className="fn-footer__contact">
              <a href={`mailto:${branding.contact.email}`}>{branding.contact.email}</a>
              <a href={`tel:${branding.contact.phone}`}>{branding.contact.phone}</a>
              <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
                {branding.contact.address}
              </span>
            </div>
          </div>
          <p className="fn-footer__copy">
            © {new Date().getFullYear()} {branding.appName}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
