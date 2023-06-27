import React from "react";
import { Container, Button } from "react-bootstrap";

const Resume = () => {
  const resumeUrl = "src/assets/resume/Faith_Meades_CV.pdf"; // Replace with the actual path to your resume PDF

  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="resume">
      <Container>
        <h2>Resume</h2>
        <p>
          Download my resume to learn more about my skills, experience, and qualifications.
        </p>
        <Button variant="primary" onClick={handleDownload}>Download Resume</Button>
      </Container>
    </section>
  );
};

export default Resume;
