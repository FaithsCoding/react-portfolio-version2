import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

// The Banner component displays the banner section
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Front-end Web Developer",
    "Back-end Web Developer",
    "Web Designer",
  ];
  const period = 2000;

  // Run the ticker function at regular intervals
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Ticker function that updates the text
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Left column */}
          <Col xs={12} md={6} xl={7}>
            {/* Track visibility */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Faith,`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Front-end Web Developer", "Back-end Web Developer", "Web Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Thank you for being here, I hope you enjoy exploring my
                    portfolio. There is a contact form at the bottom should you
                    wish to contact me or don't hesitate to reach out on my
                    socials!{" "}
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          {/* Right column */}
          <Col xs={12} md={6} xl={5}>
            {/* Track visibility */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                ></div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
