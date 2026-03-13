import React from "react";
import { branding } from "../../config/branding";

const about = branding?.pages?.about ?? {};
const team = branding?.pages?.team ?? [];
const safety = branding?.safety ?? {};

export default function About() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="fn-page-header">
        <div className="fn-page-header__inner">
          <span className="fn-page-header__eyebrow">Fundacja NOWY JA</span>
          <h1 className="fn-page-header__title">O fundacji</h1>
          <p className="fn-page-header__subtitle">
            Pionierska organizacja systemowa w obszarze psychiatrii sądowej — łącząca opiekę kliniczną,
            nadzór prawny i współpracę międzynarodową.
          </p>
        </div>
      </div>

      {/* ── KIM JESTEŚMY ─────────────────────────────────────── */}
      <section className="fn-section fn-section--dark">
        <div className="fn-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div className="fn-accent-box">
              <h2 className="fn-accent-box__title">Kim jesteśmy?</h2>
              <p className="fn-accent-box__text">{about.whoWeAre}</p>
            </div>
            <div className="fn-accent-box fn-accent-box--gold">
              <h2 className="fn-accent-box__title">Nasz cel</h2>
              <p className="fn-accent-box__text">{about.ourGoal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="fn-section">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Eksperci</span>
            <h2 className="fn-section__title">Nasz zespół</h2>
          </div>
          <div className="fn-team-grid">
            {team.map((person) => {
              const initials = person.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2);
              return (
                <div key={person.name} className="fn-team-card">
                  <div className="fn-team-card__avatar">{initials}</div>
                  <h3 className="fn-team-card__name">{person.name}</h3>
                  <p className="fn-team-card__role">{person.role}</p>
                  {person.desc && (
                    <p className="fn-team-card__desc">{person.desc}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERZY ────────────────────────────────────────── */}
      {branding?.pages?.partners && (
        <section className="fn-section fn-section--dark">
          <div className="fn-container">
            <div className="fn-section__header">
              <span className="fn-section__eyebrow">Współpraca</span>
              <h2 className="fn-section__title">Partnerzy systemowi</h2>
            </div>
            <div className="fn-goal-banner">
              <p className="fn-goal-banner__text" style={{ margin: 0 }}>
                {branding.pages.partners}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── BEZPIECZEŃSTWO ───────────────────────────────────── */}
      {safety.intro && (
        <section className="fn-section">
          <div className="fn-container">
            <div className="fn-section__header">
              <span className="fn-section__eyebrow">Priorytet</span>
              <h2 className="fn-section__title">Bezpieczeństwo publiczne i zarządzanie ryzykiem</h2>
              <p className="fn-section__lead">{safety.intro}</p>
            </div>

            <div className="fn-feature-grid">
              {safety.riskManagement?.title && (
                <div className="fn-feature">
                  <div className="fn-feature__icon">🛡</div>
                  <h3 className="fn-feature__title">{safety.riskManagement.title}</h3>
                  <p className="fn-feature__text">{safety.riskManagement.text}</p>
                </div>
              )}

              {safety.escapeProcedures?.title && (
                <div className="fn-feature">
                  <div className="fn-feature__icon">🚨</div>
                  <h3 className="fn-feature__title">{safety.escapeProcedures.title}</h3>
                  <p className="fn-feature__text" style={{ marginBottom: "0.75rem" }}>
                    {safety.escapeProcedures.text}
                  </p>
                  {safety.escapeProcedures.steps?.length > 0 && (
                    <ul className="fn-safety-steps">
                      {safety.escapeProcedures.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {safety.reporting && (
                <div className="fn-feature">
                  <div className="fn-feature__icon">📋</div>
                  <h3 className="fn-feature__title">Raportowanie</h3>
                  <p className="fn-feature__text">{safety.reporting}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
