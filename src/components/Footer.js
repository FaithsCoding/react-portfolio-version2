import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Resume } from "./Resume";

// The Footer component displays the footer section
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <Resume />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/faith-meades-a66b20276/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/FaithsCoding">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/designerrprojects/?hl=en-gb">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Made with love by FaithsCoding 2023.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
