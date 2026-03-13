import React, { useState } from "react";
import { branding } from "../../config/branding";

export default function Contact() {
  const { contact } = branding ?? {};
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="fn-page-header">
        <div className="fn-page-header__inner">
          <span className="fn-page-header__eyebrow">Biuro Koordynatora</span>
          <h1 className="fn-page-header__title">Kontakt</h1>
          <p className="fn-page-header__subtitle">
            Odpowiadamy na zapytania rodzin, szpitali, pełnomocników i instytucji.
            Skontaktuj się z nami w sprawie transferu pacjenta.
          </p>
        </div>
      </div>

      {/* ── CONTACT CARDS ────────────────────────────────────── */}
      <section className="fn-section fn-section--dark">
        <div className="fn-container">
          <div className="fn-contact-grid">
            <div className="fn-contact-card">
              <span className="fn-contact-card__icon">✉</span>
              <span className="fn-contact-card__label">E-mail</span>
              <a href={`mailto:${contact?.email}`} className="fn-contact-card__value">
                {contact?.email}
              </a>
            </div>
            <div className="fn-contact-card">
              <span className="fn-contact-card__icon">📞</span>
              <span className="fn-contact-card__label">Telefon</span>
              <a href={`tel:${contact?.phone}`} className="fn-contact-card__value">
                {contact?.phone}
              </a>
            </div>
            <div className="fn-contact-card">
              <span className="fn-contact-card__icon">📍</span>
              <span className="fn-contact-card__label">Adres</span>
              <span className="fn-contact-card__value" style={{ cursor: "default" }}>
                {contact?.address}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section className="fn-section">
        <div className="fn-container">
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <div className="fn-section__header" style={{ textAlign: "left", marginBottom: "2rem" }}>
              <span className="fn-section__eyebrow">Formularz</span>
              <h2 className="fn-section__title" style={{ textAlign: "left" }}>
                Wyślij zapytanie
              </h2>
            </div>

            {sent ? (
              <div className="fn-goal-banner" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                <h3 className="fn-goal-banner__title">Wiadomość wysłana!</h3>
                <p className="fn-goal-banner__text" style={{ margin: 0 }}>
                  Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="fn-card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jan Kowalski"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      color: "#e2e8f0",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    Adres e-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jan@przyklad.pl"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      color: "#e2e8f0",
                      fontSize: "0.95rem",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    Wiadomość
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Opisz sprawę pacjenta lub zadaj pytanie..."
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "10px",
                      padding: "0.75rem 1rem",
                      color: "#e2e8f0",
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(13,148,136,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <button type="submit" className="fn-btn fn-btn--primary fn-btn--lg" style={{ alignSelf: "flex-start" }}>
                  Wyślij wiadomość →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
