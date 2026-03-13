import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table } from "reactstrap";
import { branding } from "../../config/branding";

const projects = branding?.projects ?? { items: [] };
const procedures = branding?.procedures ?? [];
const presentations = branding?.presentations ?? [];

export default function Projects() {
  const items = projects.items ?? [];

  const getKraj = (item) => {
    if (item.key === "transgraniczna") return "Polska – Holandia";
    if (item.key === "forensiconnect") return "Platforma telemedyczna (EU)";
    return "—";
  };

  return (
    <Container fluid className="mb-4">
      <Row>
        <Col>
          <h1 className="h3 mb-4">Nasze projekty</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Lista projektów</CardHeader>
            <CardBody className="p-0">
              <Table responsive hover className="mb-0">
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
                        <strong>{item.title}</strong>
                        {item.text && (
                          <p className="small text-muted mb-0 mt-1">{item.text}</p>
                        )}
                      </td>
                      <td>
                        <span className="badge bg-primary">{item.status}</span>
                      </td>
                      <td>{getKraj(item)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Zakładka 4: Procedury i model działania (Ścieżka pacjenta) */}
      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>{projects.modelTitle ?? "Procedury i model działania (Ścieżka pacjenta)"}</CardHeader>
            <CardBody>
              {projects.modelDescription && (
                <p className="mb-4">{projects.modelDescription}</p>
              )}
              <Row>
                {procedures.map((step, i) => (
                  <Col key={step.title} md="4">
                    <Card className="mb-3 border">
                      <CardHeader className="bg-light py-2">
                        <span className="badge bg-primary me-2">{i + 1}</span>
                        {step.title}
                      </CardHeader>
                      <CardBody className="py-3">
                        <p className="small mb-0">{step.text}</p>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {presentations.length > 0 && (
        <Row>
          <Col>
            <Card className="mb-4">
              <CardHeader>Materiały i prezentacje</CardHeader>
              <CardBody>
                <p className="text-muted small mb-3">
                  Prezentacje do pobrania w formacie PDF.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  {presentations.map((item) => (
                    <a
                      key={item.file}
                      href={`${process.env.PUBLIC_URL || ""}/documents/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary d-inline-flex align-items-center"
                    >
                      <span className="me-2">📄</span>
                      {item.title}
                    </a>
                  ))}
                </div>
                {presentations.some((p) => p.description) && (
                  <ul className="list-unstyled mt-3 mb-0 small text-muted">
                    {presentations.map((item) => (
                      <li key={item.file}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Partnerzy systemowi</CardHeader>
            <CardBody>
              <p className="mb-0">{branding?.pages?.partners}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
