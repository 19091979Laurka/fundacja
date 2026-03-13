import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fn-root">
      <header className="fn-header" style={scrolled ? { background: "rgba(10,22,40,0.97)" } : {}}>
        <div className="fn-header__inner">
          <NavLink to="/" className="fn-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo-nowyja.png" alt={branding.appName} />
          </NavLink>

          <button
            className="fn-nav-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`fn-nav ${menuOpen ? "fn-nav--open" : ""}`}>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  "fn-nav__link" + (isActive ? " fn-nav__link--active" : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/kontakt"
              className="fn-btn fn-btn--primary"
              style={{ marginLeft: "0.75rem", padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </NavLink>
          </nav>
        </div>
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
