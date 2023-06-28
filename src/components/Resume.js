import React from "react";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

// The Resume component displays information about the user's resume
export const Resume = () => {
  // Define the URL for the resume PDF file
  const resumeUrl =
    process.env.PUBLIC_URL + "/assets/resume/Faith_Meades_CV.pdf";

  return (
    <section className="resume" id="resume">
      <Container>
        <div className="resume-section">
          {/* Heading */}
          <h2>Resume</h2>
          {/* Description */}
          <p>
            I am efficient in HTML, CSS, JavaScript, Web Api's, Third Party
            Api's, Server-Side Api's, Node, Object-Orientated Programming,
            Express, SQL, Object-Relational Mapping, NoSQL, Progressive Web
            Applications, and React. Download my resume to learn more about my
            skills, experience, and qualifications.
          </p>
          {/* Resume Download Button */}
          <a href={resumeUrl} download>
            <button
              className="resume-button"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Download Resume <ArrowRightCircle size={20} />
            </button>
          </a>
        </div>
      </Container>
    </section>
  );
};
