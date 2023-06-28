import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectImage1 from "../assets/img/project-img1.png";
import projectImage2 from "../assets/img/project-img2.png";
import projectImage3 from "../assets/img/project-img3.png";
import projectImage4 from "../assets/img/project-img4.png";
import projectImage5 from "../assets/img/project-img5.png";
import projectImage6 from "../assets/img/project-img6.png";

export const Projects = () => {
  const projects = [
    {
      title: "WeatherIGo",
      description: "This was an app created for our first group project.",
      imageUrl: projectImage1,
      url: "https://faithscoding.github.io/weather-i-go/",
      github: "https://github.com/FaithsCoding/weather-i-go",
    },
    {
      title: "The Sequel",
      description: "This was an app created for our second group project.",
      imageUrl: projectImage2,
      url: "https://the-movie-sequel.herokuapp.com/",
      github: "https://github.com/Iman-Jama/movie-part2",
    },
    {
      title: "Developer Blog",
      description: "This was an app created for one of my assignments.",
      imageUrl: projectImage3,
      url: "https://faithscodingblog.herokuapp.com/",
      github: "https://github.com/FaithsCoding/Developer-Blog",
    },
    {
      title: "Weather Dashboard",
      description: "This was an app created for our first group project.",
      imageUrl: projectImage4,
      url: "https://faithscoding.github.io/weather-dashboard/",
      github: "https://github.com/FaithsCoding/weather-dashboard",
    },
    {
      title: "Just Another Text Editor (JATE)",
      description: "This was an app created for our second group project.",
      imageUrl: projectImage5,
      url: "https://faiths-jate-8803879369c0.herokuapp.com/",
      github: "https://github.com/FaithsCoding/text-editor",
    },
    {
      title: "Password Generator",
      description: "This was an app created for one of my assignments.",
      imageUrl: projectImage6,
      url: "https://faithscoding.github.io/developing-a-password-generator/",
      github: "https://github.com/FaithsCoding/developing-a-password-generator",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Projects</h2>
            <p style={{ textAlign: "center" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              infinite
              className="owl-carousel owl-theme skill-slider"
              arrows
              autoPlaySpeed={3000}
              slidesToSlide={1}
              swipeable
            >
              {projects.map((project, index) => (
                <Card key={index}>
                  <Card.Img variant="top" src={project.imageUrl} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button
                      variant="primary"
                      href={project.url}
                      target="_blank"
                      style={{
                        backgroundColor: "#5439BB",
                        border: "none",
                        margin: "5px 0",
                      }}
                    >
                      Deployed
                    </Button>
                    <Button
                      variant="primary"
                      href={project.url}
                      target="_blank"
                      style={{
                        backgroundColor: "#5439BB",
                        border: "none",
                        margin: "5px 5px",
                      }}
                    >
                      Github Repository
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
