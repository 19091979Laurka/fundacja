import React from "react";
import { branding } from "../../config/branding";

const projects = branding?.projects ?? { items: [] };
const procedures = branding?.procedures ?? [];
const presentations = branding?.presentations ?? [];
const strategy = branding?.strategy ?? {};

const getKraj = (item) => {
  if (item.key === "transgraniczna") return "Polska – Holandia";
  if (item.key === "forensiconnect") return "Platforma telemedyczna (EU)";
  return "—";
};

const getStatusBadge = (status) => {
  if (!status) return null;
  const lower = status.toLowerCase();
  if (lower.includes("wdrożony") || lower.includes("realizowany")) {
    return <span className="fn-badge fn-badge--green">{status}</span>;
  }
  if (lower.includes("przygotowaniu") || lower.includes("negocjacjach")) {
    return <span className="fn-badge fn-badge--amber">{status}</span>;
  }
  return <span className="fn-badge fn-badge--blue">{status}</span>;
};

export default function Projects() {
  const items = projects.items ?? [];

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <div className="fn-page-header">
        <div className="fn-page-header__inner">
          <span className="fn-page-header__eyebrow">Portfolio</span>
          <h1 className="fn-page-header__title">Nasze projekty</h1>
          <p className="fn-page-header__subtitle">
            Kompleksowe programy reintegracji i innowacyjne platformy telemedyczne — na skalę europejską.
          </p>
        </div>
      </div>

      {/* ── PROJECT TABLE ─────────────────────────────────────── */}
      <section className="fn-section fn-section--dark">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Aktywne inicjatywy</span>
            <h2 className="fn-section__title">Lista projektów</h2>
          </div>
          <div className="fn-table-wrap">
            <table className="fn-table">
              <thead>
                <tr>
                  <th>Projekt</th>
                  <th>Status</th>
                  <th>Kierunek</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.key ?? item.title}>
                    <td>
                      <strong style={{ color: "#fff", display: "block", marginBottom: "0.35rem" }}>
                        {item.title}
                      </strong>
                      {item.text && (
                        <span style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.6 }}>
                          {item.text}
                        </span>
                      )}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {getStatusBadge(item.status)}
                    </td>
                    <td style={{ color: "#94a3b8", whiteSpace: "nowrap" }}>
                      {getKraj(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PATIENT PATH ─────────────────────────────────────── */}
      <section className="fn-section">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Model działania</span>
            <h2 className="fn-section__title">
              {projects.modelTitle ?? "Procedury i model działania (Ścieżka pacjenta)"}
            </h2>
            {projects.modelDescription && (
              <p className="fn-section__lead">{projects.modelDescription}</p>
            )}
          </div>
          <div className="fn-steps">
            {procedures.map((step, i) => (
              <div key={step.title} className="fn-step">
                <div className="fn-step__number">{i + 1}</div>
                <h3 className="fn-step__title">{step.title}</h3>
                <p className="fn-step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGY ─────────────────────────────────────────── */}
      {strategy.horizon && (
        <section className="fn-section fn-section--dark">
          <div className="fn-container">
            <div className="fn-section__header">
              <span className="fn-section__eyebrow">Strategia</span>
              <h2 className="fn-section__title">Horyzont finansowania</h2>
              <p className="fn-section__lead">{strategy.horizon}</p>
            </div>
            <div className="fn-feature-grid">
              {(strategy.goals ?? []).map((goal, i) => (
                <div key={i} className="fn-feature">
                  <div className="fn-feature__icon">{i === 0 ? "🇪🇺" : "💶"}</div>
                  <p className="fn-feature__text">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRESENTATIONS ────────────────────────────────────── */}
      {presentations.length > 0 && (
        <section className="fn-section">
          <div className="fn-container">
            <div className="fn-section__header">
              <span className="fn-section__eyebrow">Dokumenty</span>
              <h2 className="fn-section__title">Materiały i prezentacje</h2>
              <p className="fn-section__lead">Prezentacje do pobrania w formacie PDF.</p>
            </div>
            <div className="fn-doc-grid">
              {presentations.map((item) => (
                <a
                  key={item.file}
                  href={`/documents/${item.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fn-doc-card"
                >
                  <span className="fn-doc-card__icon">📄</span>
                  <div>
                    <p className="fn-doc-card__title">{item.title}</p>
                    {item.description && (
                      <p className="fn-doc-card__desc">{item.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PARTNERS ─────────────────────────────────────────── */}
      <section className="fn-section fn-section--dark">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Sieć</span>
            <h2 className="fn-section__title">Partnerzy systemowi</h2>
          </div>
          <div className="fn-goal-banner">
            <p className="fn-goal-banner__text" style={{ margin: 0 }}>
              {branding?.pages?.partners}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
