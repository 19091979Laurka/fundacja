import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
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

export default function Home() {
  const stats = home.stats ?? [];
  const steps = home.steps ?? [];

  return (
    <Container fluid className="mb-4">
      {/* Hero – jeden boks */}
      <Row>
        <Col>
          <Card className="mb-3">
            <CardBody className="text-center py-5">
              <h1 className="h3 mb-2">{home.heroTitle ?? branding?.appName}</h1>
              <p className="text-muted mb-3">{home.heroSubtitle}</p>
              <p className="small text-uppercase fw-bold text-primary">{branding?.tagline}</p>
              <Link to="/projekty" className="btn btn-primary btn-lg">
                Zobacz projekty międzynarodowe
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Liczniki – 3 kolorowe boksy */}
      <Row>
        {stats.map((item, i) => (
          <Col key={item.label} md="6" xl="4">
            <div
              className={`card mb-3 widget-content text-white ${
                ["bg-foundation-1", "bg-foundation-2", "bg-foundation-3"][i % 3]
              }`}
            >
              <div className="widget-content-wrapper">
                <div className="widget-content-left">
                  <div className="widget-heading">{item.label}</div>
                  <div className="widget-subheading">{item.detail}</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    {String(item.value).includes("+") ? (
                      <CountUp end={25} duration={2} suffix="+" />
                    ) : (
                      <CountUp end={parseInt(item.value, 10) || 0} duration={2} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Jak to działa – 3 boksy */}
      <Row>
        <Col><h5 className="mb-3">Jak to działa</h5></Col>
      </Row>
      <Row>
        {steps.map((step, i) => (
          <Col key={step.title} md="4">
            <Card className="mb-3">
              <CardHeader className="bg-light">
                <span className="badge bg-primary me-2">{i + 1}</span>
                {step.title}
              </CardHeader>
              <CardBody>
                <p className="mb-0 small">{step.text}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Wyniki – wykres */}
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Wyniki programu</CardHeader>
            <CardBody>
              <div style={{ height: 260 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="transfery" fill="#0d9488" name="Transfery" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="wTrakcie" fill="#7c3aed" name="W trakcie" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="liczba" fill="#0ea5e9" name="Źródła" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Mapa */}
      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Gdzie działamy</CardHeader>
            <CardBody className="p-0">
              <div style={{ height: 320 }}>
                <MapContainer
                  center={mapCenter}
                  zoom={6}
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {locations.map((loc) => (
                    <Marker key={loc.name} position={loc.position}>
                      <Popup>
                        <strong>{loc.name}</strong>
                        <br />
                        {loc.desc}
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Nasz cel – jeden boks */}
      {home.ourGoal && (
        <Row>
          <Col>
            <Card className="mb-3 border-primary">
              <CardHeader className="bg-primary text-white">Nasz cel</CardHeader>
              <CardBody>
                <p className="mb-3">{home.ourGoal}</p>
                <Link to="/o-nas" className="btn btn-outline-primary">
                  Więcej o fundacji
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      {/* Zespół – 3 boksy */}
      <Row>
        <Col><h5 className="mb-3">Zespół programowy</h5></Col>
      </Row>
      <Row>
        {team.map((person) => (
          <Col key={person.name} md="4">
            <Card className="mb-3">
              <CardBody>
                <h6 className="mb-1">{person.name}</h6>
                <p className="small text-primary mb-1">{person.role}</p>
                {person.desc && <p className="small text-muted mb-0">{person.desc}</p>}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* CTA */}
      <Row>
        <Col>
          <Card className="mb-3 bg-light">
            <CardBody className="text-center py-4">
              <h5 className="mb-2">Masz sprawę pacjenta wymagającą transferu do Polski?</h5>
              <p className="text-muted mb-3">
                Skontaktuj się z nami – odpowiadamy na zapytania rodzin, szpitali, pełnomocników i instytucji.
              </p>
              <Link to="/kontakt" className="btn btn-primary btn-lg">
                Skontaktuj się z Biurem Koordynatora
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
