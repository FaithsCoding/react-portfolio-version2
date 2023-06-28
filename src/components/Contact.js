import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import flowerPic from "../assets/img/banner-bg.png";
import { Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <section className="contact" id="contactme">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <Image src={flowerPic} alt="Flower" fluid />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.firstName && !!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.lastName && !!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      placeholder="Enter your message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.message && !!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    style={{ backgroundColor: "black", color: "white" }}
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
