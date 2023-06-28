import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={HashLink}
                to="/#home"
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="/#aboutme"
                className={`nav-link ${
                  activeLink === "aboutme" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("aboutme")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="/#projects"
                className={`nav-link ${
                  activeLink === "projects" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="/#contactme"
                className={`nav-link ${
                  activeLink === "contactme" ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink("contactme")}
              >
                Contact Me
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/faith-meades-a66b20276/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/FaithsCoding">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="">
                  <img
                    src={navIcon3}
                    alt="https://www.instagram.com/designerrprojects/?hl=en-gb"
                  />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
