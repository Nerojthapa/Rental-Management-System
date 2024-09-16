import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              RentEase is your go-to platform for seamless rental solutions. Whether you’re looking for a place to stay or managing your rental properties, we make the process easy and efficient.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ListGroup variant="flush">
              <LinkContainer to="/">
                <ListGroup.Item action className="bg-dark text-white border-0">Home</ListGroup.Item>
              </LinkContainer>
              <LinkContainer to="/cart">
                <ListGroup.Item action className="bg-dark text-white border-0">Cart</ListGroup.Item>
              </LinkContainer>
              <LinkContainer to="/signup">
                <ListGroup.Item action className="bg-dark text-white border-0">Signup</ListGroup.Item>
              </LinkContainer>
              <LinkContainer to="/login">
                <ListGroup.Item action className="bg-dark text-white border-0">Login</ListGroup.Item>
              </LinkContainer>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              Email: support@rentease.com<br />
              Phone: +977-9869551984<br />
              Address: Mahalaxmi-04,Imadol Bhojepokhari,Lalitpur
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} RentEase. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
