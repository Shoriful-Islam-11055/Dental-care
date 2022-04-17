import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/hr-line.PNG";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import googleIcon from "../../images/logos/google-icon.png";

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrmPass, setConfrmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfrmPasswordBlur = (event) => {
    setConfrmPass(event.target.value);
  };

  const handleErrorBlur = (event) => {
    setError(event.target.value);
  };

  const handleCreateUser = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // if(password !== confrmPass){
    //   setError('Did not match password');
    //   return;
    // }

    // if(password.length < 5){
    //   setError('Password must be 6 characters or more!');
    //   event.preventDefault();
    //   return;
    // }
    createUserWithEmailAndPassword(email, password);
    setValidated(true);
  };

  if (user) {
    navigate("/login");
  }

  return (
    <div className="from-container vh-100 fixed-top">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleCreateUser}
        className="form-area shadow-lg"
      >
        <h3 className="text-center">Sign Up</h3>
        <p className="text-center fs-1 font-monospace"></p>
        <Form.Group className="mb-2" controlId="validationCustom01">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailBlur}
            required
            type="email"
            placeholder="Enter email"
            defaultValue="hello@gmail.com"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            required
            type="password"
            placeholder="Enter password"
          />
          <p>{error}</p>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationCustom03">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={handleConfrmPasswordBlur}
            required
            type="password"
            placeholder="Confirm password"
          />
          <p style={{ color: "red" }}>{error}</p>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button type="submit" variant="secondary fw-bold" size="lg">
            Sign Up
          </Button>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-decoration-none" to="/signIn">
            Sign-In
          </Link>
        </p>
        <img className="img-or" src={logo} alt="" />

        <div className="d-grid gap-2">
          <Button variant="outline-dark fw-bold" size="lg">
            <span className="p-2">
              <img src={googleIcon} alt="" />
            </span>
            Continue with google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
