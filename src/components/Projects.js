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
      description:
        "This app was created as part of my first group project. This app was designed to allow the user to search an event they would like to attend and find out what the weather would be (and yes, the pun 'whether(Weather) I go' was intended). This app challenged us to use various API's aswell as using new styling tools.",
      imageUrl: projectImage1,
      url: "https://faithscoding.github.io/weather-i-go/",
      github: "https://github.com/FaithsCoding/weather-i-go",
    },
    {
      title: "The Sequel",
      description:
        "This was created as part of our second group project. We took an already exisiting idea and improved it. We applied a lot of CRUD operations as well as using API's and new front end framework. We also incoporated a lot of node as well as SQL databases to run the app and store data.",
      imageUrl: projectImage2,
      url: "https://the-movie-sequel.herokuapp.com/",
      github: "https://github.com/Iman-Jama/movie-part2",
    },
    {
      title: "Developer Blog",
      description:
        "I created the developer blog app for one of my indidvual assignments. I used bootstrap for the styling and SQL for my back end. ",
      imageUrl: projectImage3,
      url: "https://faithscodingblog.herokuapp.com/",
      github: "https://github.com/FaithsCoding/Developer-Blog",
    },
    {
      title: "Weather Dashboard",
      description:
        "I created the weather dashboard for one of my individual assignments. This encouraged me to apply my knowledge of third party api's. ",
      imageUrl: projectImage4,
      url: "https://faithscoding.github.io/weather-dashboard/",
      github: "https://github.com/FaithsCoding/weather-dashboard",
    },
    {
      title: "Just Another Text Editor (JATE)",
      description:
        "I created this app for one of my individual assignments. This assignment came with starter code which challenged me to understand how someone else had applied their logic and adapt to it to enable to functionality.",
      imageUrl: projectImage5,
      url: "https://faiths-jate-8803879369c0.herokuapp.com/",
      github: "https://github.com/FaithsCoding/text-editor",
    },
    {
      title: "Password Generator",
      description:
        "I created the password generator as one of my individual assignments. When using this generator you will notice some room for improvement, however I wanted to leave this in my porfolio as developing this app taught me a lot about how data works and some of the best practices to use when developing.",
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
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 style={{ textAlign: "center" }}>Portfolio</h2>
            <p style={{ textAlign: "center" }}>
              I have always been a team player in the workplace and the bootcamp
              has only re-encforced those qualities. I have loved getting to
              know my peers and learning from each other has been such a
              positive experience.
              <br />
              Below is some of both my group projects and my individual
              challenges that I have completed.
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
                      href={project.github}
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
