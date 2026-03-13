import React from "react";
import { Link } from "react-router-dom";

// Znak „N” – grubszy, w osobnym kolorze; razem z „owyja” = ciąg słowa Nowyja
function LogoMark() {
  return (
    <svg
      className="logo-foundation-mark"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M5 27V5h5v22H5z" fill="currentColor" />
      <path d="M22 27V5h5v22h-5z" fill="currentColor" />
      <path
        d="M5 5l22 22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AppLogo() {
  return (
    <div className="app-header__logo">
      <div className="logo-src d-flex align-items-center">
        <Link to="/" className="text-decoration-none logo-foundation d-flex align-items-center">
          <LogoMark />
          <span className="logo-foundation-word">
            owyja <span className="logo-foundation-foundation">FOUNDATION</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

