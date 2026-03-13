import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CountUp from "react-countup";
import { branding } from "../../config/branding";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const home = branding?.pages?.home ?? {};
const team = branding?.pages?.team ?? [];

const chartData = [
  { name: "Polska–Holandia", transfery: 12, wTrakcie: 3 },
  { name: "Islandia/Szwecja", transfery: 0, wTrakcie: 2 },
  { name: "Źródła grantów", liczba: 25 },
];

const mapCenter = [52.23, 21.01];
const locations = [
  { position: [52.23, 21.01], name: "Warszawa", desc: "Szpital WAM, koordynacja" },
  { position: [52.55, 19.71], name: "Płock", desc: "Centrum operacyjne, adaptacja" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "0.75rem 1rem",
        fontSize: "0.85rem",
        color: "#0f172a",
        boxShadow: "0 4px 24px rgba(30,58,95,0.12)",
      }}>
        <p style={{ margin: "0 0 0.4rem", fontWeight: 700, color: "#1e3a5f" }}>{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ margin: "0.2rem 0", color: entry.color }}>
            {entry.name}: <strong>{entry.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Home() {
  const stats = home.stats ?? [];
  const steps = home.steps ?? [];

  return (
    <>
      {/* ── HERO — split layout ──────────────────────────────── */}
      <section className="fn-hero">
        <div className="fn-hero__content">
          <div className="fn-hero__text">
            <div className="fn-hero__badge">
              ⚖ {branding.tagline}
            </div>
            <h1 className="fn-hero__title">
              Fundacja<br />
              <span>NOWY JA</span>
            </h1>
            <p className="fn-hero__subtitle">
              {home.heroSubtitle}
            </p>
            <div className="fn-hero__actions">
              <Link to="/projekty" className="fn-btn fn-btn--primary fn-btn--lg">
                Zobacz projekty
              </Link>
              <Link to="/o-nas" className="fn-btn fn-btn--outline fn-btn--lg">
                O fundacji
              </Link>
            </div>
          </div>
          <div className="fn-hero__media">
            <img
              src="/buildings.jpg"
              alt="Fundacja NOWY JA — działamy na rzecz pacjentów"
            />
          </div>
        </div>
        <div className="fn-hero__scroll">
          <span>Przewiń</span>
          <div className="fn-hero__scroll-line" />
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ─────────────────────────────────── */}
      <div className="fn-highlight-strip">
        Fundacja aktywna od 2024 · Program transferu psychiatrycznego · Polska · Holandia · Islandia
      </div>

      {/* ── STAT STRIP ───────────────────────────────────────── */}
      <div className="fn-stat-strip">
        <div className="fn-stat-strip__inner">
          {stats.map((item) => (
            <div key={item.label} className="fn-stat-item">
              <span className="fn-stat-item__number">
                {String(item.value).includes("+") ? (
                  <CountUp end={25} duration={2.5} suffix="+" />
                ) : (
                  <CountUp end={parseInt(item.value, 10) || 0} duration={2.5} />
                )}
              </span>
              <span className="fn-stat-item__label">{item.label}</span>
              <span className="fn-stat-item__detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="fn-section fn-section--alt">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Proces</span>
            <h2 className="fn-section__title">Jak to działa</h2>
            <p className="fn-section__lead">
              Trzyetapowy, rygorystyczny model transferu i reintegracji pacjentów psychiatrycznych.
            </p>
          </div>
          <div className="fn-steps">
            {steps.map((step, i) => (
              <div key={step.title} className="fn-step">
                <div className="fn-step__number">{i + 1}</div>
                <h3 className="fn-step__title">{step.title}</h3>
                <p className="fn-step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / GOAL ───────────────────────────────────── */}
      {home.ourGoal && (
        <section className="fn-section">
          <div className="fn-container">
            <div className="fn-split-grid">
              <div className="fn-split-grid__text">
                <span className="fn-section__eyebrow">Misja</span>
                <h2 className="fn-section__title fn-section__title--left">
                  Nasz cel
                </h2>
                <p className="fn-split-grid__body">
                  {home.ourGoal}
                </p>
                <Link to="/o-nas" className="fn-btn fn-btn--primary">
                  Więcej o fundacji →
                </Link>
              </div>
              <div className="fn-split-grid__media">
                <img
                  src="/interconnected.jpg"
                  alt="Misja fundacji"
                  className="fn-split-grid__img"
                />
                <div className="fn-split-grid__accent fn-split-grid__accent--left" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS CHART ────────────────────────────────────── */}
      <section className="fn-section fn-section--alt">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Dane</span>
            <h2 className="fn-section__title">Wyniki programu</h2>
            <p className="fn-section__lead">
              Aktywność programowa i statystyki transferów w ujęciu kierunkowym.
            </p>
          </div>
          <div className="fn-chart-card">
            <div className="fn-chart-card__title">Aktywność programowa</div>
            <div style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#64748b" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    wrapperStyle={{ fontSize: "0.82rem", color: "#64748b", paddingTop: "1rem" }}
                  />
                  <Bar dataKey="transfery" fill="#2563eb" name="Transfery" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="wTrakcie" fill="#0ea5e9" name="W trakcie" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="liczba" fill="#1e3a5f" name="Źródła finansowania" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="fn-section">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Zasięg</span>
            <h2 className="fn-section__title">Gdzie działamy</h2>
            <p className="fn-section__lead">
              Aktywne lokalizacje programu w Polsce — Warszawa i Płock.
            </p>
          </div>
          <div className="fn-map-card">
            <div className="fn-map-card__header">Mapa operacyjna</div>
            <div style={{ height: 380 }}>
              <MapContainer
                center={mapCenter}
                zoom={6}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((loc) => (
                  <Marker key={loc.name} position={loc.position}>
                    <Popup>
                      <strong>{loc.name}</strong><br />{loc.desc}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="fn-section fn-section--alt">
        <div className="fn-container">
          <div className="fn-section__header">
            <span className="fn-section__eyebrow">Ludzie</span>
            <h2 className="fn-section__title">Nasz Zespół</h2>
            <p className="fn-section__lead">
              Eksperci z dziedziny psychiatrii, prawa i psychologii — tworzący unikalne rozwiązania systemowe.
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="fn-cta-section">
        <div className="fn-cta-section__inner">
          <h2 className="fn-cta-section__title">
            Masz sprawę pacjenta wymagającą transferu do Polski?
          </h2>
          <p className="fn-cta-section__text">
            Skontaktuj się z nami — odpowiadamy na zapytania rodzin, szpitali, pełnomocników i instytucji.
          </p>
          <Link to="/kontakt" className="fn-btn fn-btn--primary fn-btn--lg">
            Skontaktuj się z Biurem Koordynatora
          </Link>
        </div>
      </section>
    </>
  );
}
