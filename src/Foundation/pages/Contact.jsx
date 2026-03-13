import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { branding } from "../../config/branding";

export default function Contact() {
  const { contact } = branding ?? {};

  return (
    <Container fluid className="mb-4">
      <Row>
        <Col>
          <h1 className="h3 mb-4">Kontakt</h1>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Card className="mb-3">
            <CardHeader className="bg-light">E-mail</CardHeader>
            <CardBody>
              <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-3">
            <CardHeader className="bg-light">Telefon</CardHeader>
            <CardBody>
              <a href={`tel:${contact?.phone}`}>{contact?.phone}</a>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-3">
            <CardHeader className="bg-light">Adres</CardHeader>
            <CardBody>
              <p className="mb-0">{contact?.address}</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
