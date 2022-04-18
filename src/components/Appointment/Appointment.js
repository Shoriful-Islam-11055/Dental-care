import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
  const [validated, setValidated] = useState(false);
  const [notification, setNotification] = useState()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setNotification('Thank You! I have received your details.')
    setValidated(true);
  };
  return (
    <div className="from-container vh-100 fixed-top">
      <Form
        className="form-area-appointment"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="Mobile number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>What's your problem, in few word</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid text.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
      <p className="text-center fs-4 fw-bold text-success">{notification}</p>
    </div>
  );
};

export default Appointment;
