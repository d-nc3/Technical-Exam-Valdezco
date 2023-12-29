// YourComponent.jsx
import React from 'react';

import './Header.css'; // Import your custom CSS file
import { Container, Navbar, Nav } from 'react-bootstrap';

const YourComponent = () => {
  return (
    <Container fluid>
      <div className="logoName">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <h5>The Beauty Salon</h5>
          </Navbar.Brand>
          <Navbar.Toggle className="header-bg" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default YourComponent;




