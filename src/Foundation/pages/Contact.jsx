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
      <section className="fn-section fn-section--alt">
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
          <div className="fn-contact-form-grid">
            {/* Left: info */}
            <div className="fn-contact-form-grid__info">
              <span className="fn-section__eyebrow">Formularz</span>
              <h2 className="fn-section__title fn-section__title--left">
                Wyślij zapytanie
              </h2>
              <p className="fn-split-grid__body">
                Nasz zespół odpowiada na zapytania dotyczące transferów psychiatrycznych,
                procedur prawnych i możliwości współpracy instytucjonalnej.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
                <div className="fn-accent-box">
                  <h4 className="fn-accent-box__title">⏱ Czas odpowiedzi</h4>
                  <p className="fn-accent-box__text">Odpowiadamy w ciągu 24–48 godzin roboczych.</p>
                </div>
                <div className="fn-accent-box fn-accent-box--gold">
                  <h4 className="fn-accent-box__title">🔒 Poufność</h4>
                  <p className="fn-accent-box__text">Wszystkie dane są traktowane z pełną poufnością zgodnie z RODO.</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="fn-contact-form-grid__form">
              {sent ? (
                <div className="fn-goal-banner" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                  <h3 className="fn-goal-banner__title">Wiadomość wysłana!</h3>
                  <p className="fn-goal-banner__text" style={{ margin: 0 }}>
                    Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="fn-form">
                  <div className="fn-form__group">
                    <label className="fn-form__label">Imię i nazwisko</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jan Kowalski"
                      className="fn-form__input"
                    />
                  </div>
                  <div className="fn-form__group">
                    <label className="fn-form__label">Adres e-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jan@przyklad.pl"
                      className="fn-form__input"
                    />
                  </div>
                  <div className="fn-form__group">
                    <label className="fn-form__label">Wiadomość</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Opisz sprawę pacjenta lub zadaj pytanie..."
                      className="fn-form__textarea"
                    />
                  </div>
                  <button type="submit" className="fn-btn fn-btn--primary fn-btn--lg">
                    Wyślij wiadomość →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
