import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import profilePic from "../assets/img/FMPROFILEPIC.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Image } from "react-bootstrap";

export const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="aboutme">
      <Container>
        <Row>
          <Col md={12}>
            <div className="skill-bx wow zoomIn">
              <div className="d-flex align-items-center">
                <div className="profile-picture">
                  <Image
                    src={profilePic}
                    alt="Profile"
                    rounded
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className="ms-3">
                  <h2>About Me</h2>
                  <p>
                    I started my adventure into the coding world in 2020 whereby
                    I began designing websites using templates. I also began a
                    buisness called Designerr. which focused on websites and
                    creating branding. <br /> After a successful start, I wanted
                    to learn more about how things worked and how I could
                    improve myself and my buisness therefore I enrolled on the
                    Full Stack Web Development bootcamp. I qualify in July 2023
                    and would love to gain more experience within the work place
                    in this industry.
                  </p>
                </div>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>NoSQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
