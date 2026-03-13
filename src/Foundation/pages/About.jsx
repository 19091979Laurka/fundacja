import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { branding } from "../../config/branding";

const about = branding?.pages?.about ?? {};
const team = branding?.pages?.team ?? [];
const safety = branding?.safety ?? {};

export default function About() {
  return (
    <Container fluid className="mb-4">
      <Row>
        <Col>
          <h1 className="h3 mb-4">O fundacji</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Kim jesteśmy?</CardHeader>
            <CardBody>
              <p className="mb-0">{about.whoWeAre}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Nasz cel</CardHeader>
            <CardBody>
              <p className="mb-0">{about.ourGoal}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Nasz zespół</CardHeader>
            <CardBody>
              <Row>
                {team.map((person) => (
                  <Col key={person.name} md="4" className="mb-4">
                    <h6 className="mb-1">{person.name}</h6>
                    <p className="small text-primary mb-1">{person.role}</p>
                    {person.desc && (
                      <p className="small text-muted mb-0">{person.desc}</p>
                    )}
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {branding?.pages?.partners && (
        <Row>
          <Col>
            <Card className="mb-4">
              <CardHeader>Partnerzy</CardHeader>
              <CardBody>
                <p className="mb-0">{branding.pages.partners}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}

      {/* Zakładka 5: Bezpieczeństwo publiczne i zarządzanie ryzykiem */}
      {safety.intro && (
        <Row>
          <Col>
            <Card className="mb-4">
              <CardHeader>Bezpieczeństwo publiczne i zarządzanie ryzykiem</CardHeader>
              <CardBody>
                <p className="mb-4">{safety.intro}</p>
                {safety.riskManagement?.title && (
                  <>
                    <h6 className="mb-2">{safety.riskManagement.title}</h6>
                    <p className="mb-4">{safety.riskManagement.text}</p>
                  </>
                )}
                {safety.escapeProcedures?.title && (
                  <>
                    <h6 className="mb-2">{safety.escapeProcedures.title}</h6>
                    <p className="mb-2">{safety.escapeProcedures.text}</p>
                    {safety.escapeProcedures.steps?.length > 0 && (
                      <ol className="ps-3 mb-4">
                        {safety.escapeProcedures.steps.map((step, i) => (
                          <li key={i} className="mb-1">{step}</li>
                        ))}
                      </ol>
                    )}
                  </>
                )}
                {safety.reporting && (
                  <p className="mb-0"><strong>Raportowanie:</strong> {safety.reporting}</p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}
