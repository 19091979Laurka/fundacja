import React, { useState } from "react";
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

  return (
    <div className="fn-root">
      <header className="fn-header">
        <div className="fn-container fn-header__inner">
          <NavLink to="/" className="fn-logo">
            <span className="fn-logo__name">{branding.appName}</span>
            <span className="fn-logo__tag">{branding.tagline}</span>
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
              <strong>{branding.appName}</strong> — {branding.tagline}
            </div>
            <div className="fn-footer__contact">
              <a href={`mailto:${branding.contact.email}`}>
                {branding.contact.email}
              </a>
              <span> · </span>
              <a href={`tel:${branding.contact.phone}`}>
                {branding.contact.phone}
              </a>
            </div>
          </div>
          <p className="fn-footer__copy">
            © {new Date().getFullYear()} {branding.appName}
          </p>
        </div>
      </footer>
    </div>
  );
}
