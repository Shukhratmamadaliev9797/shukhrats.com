import React, { useEffect } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import AOS from "aos";

export default function NavigationBar() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 50,
    });
  }, []);

  return (
    <Navbar className="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="navbar__brand" data-aos="zoom-in">
            <img src="./imgs/sh.png" alt="sh" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              data-aos="fade-down"
              className="navbar_link"
              href="#about"
            >
              About
            </Nav.Link>
            <Nav.Link
              data-aos="fade-down"
              data-aos-delay="100"
              className="navbar_link"
              href="#skills"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              data-aos="fade-down"
              data-aos-delay="150"
              className="navbar_link"
              href="#services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              data-aos="fade-down"
              data-aos-delay="200"
              className="navbar_link"
              href="#projects"
            >
              Projects
            </Nav.Link>
            <button className="button-29" href="#contact">
              Contact Me
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
