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
      <section className="fn-section">
        <div className="fn-container">
          <div className="fn-two-col-grid">
            <div className="fn-accent-box">
              <span className="fn-section__eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Tożsamość
              </span>
              <h2 className="fn-accent-box__title" style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                Kim jesteśmy?
              </h2>
              <p className="fn-accent-box__text">{about.whoWeAre}</p>
            </div>
            <div className="fn-accent-box fn-accent-box--gold">
              <span className="fn-section__eyebrow" style={{ display: "block", marginBottom: "0.5rem", color: "#d97706" }}>
                Misja
              </span>
              <h2 className="fn-accent-box__title" style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                Nasz cel
              </h2>
              <p className="fn-accent-box__text">{about.ourGoal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="fn-section fn-section--alt">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Eksperci</span>
            <h2 className="fn-section__title">Nasz zespół</h2>
            <p className="fn-section__lead">
              Interdyscyplinarny zespół specjalistów łączący wiedzę kliniczną, prawną i psychologiczną.
            </p>
          </div>
          <div className="fn-team-grid">
            {team.map((person) => {
              const initials = person.name.split(" ").map((n) => n[0]).join("").slice(0, 2);
              return (
                <div key={person.name} className="fn-team-card">
                  <div className="fn-team-card__avatar">{initials}</div>
                  <h3 className="fn-team-card__name">{person.name}</h3>
                  <p className="fn-team-card__role">{person.role}</p>
                  {person.desc && <p className="fn-team-card__desc">{person.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARTNERZY ────────────────────────────────────────── */}
      {branding?.pages?.partners && (
        <section className="fn-section">
          <div className="fn-container">
            <div className="fn-split-grid">
              <div className="fn-split-grid__text">
                <span className="fn-section__eyebrow">Współpraca</span>
                <h2 className="fn-section__title fn-section__title--left">
                  Partnerzy systemowi
                </h2>
                <p className="fn-split-grid__body">
                  {branding.pages.partners}
                </p>
              </div>
              <div className="fn-split-grid__media">
                <img
                  src="/citydark.jpg"
                  alt="Partnerzy fundacji"
                  className="fn-split-grid__img"
                />
                <div className="fn-split-grid__accent fn-split-grid__accent--right" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BEZPIECZEŃSTWO ───────────────────────────────────── */}
      {safety.intro && (
        <section className="fn-section fn-section--alt">
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
