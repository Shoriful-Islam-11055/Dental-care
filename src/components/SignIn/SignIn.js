import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/hr-line.PNG";
import googleIcon from "../../images/logos/google-icon.png";
import "./SignIn.css";

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitSignIn = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    signInWithEmailAndPassword(email, password);
    setValidated(true);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="from-container vh-100 fixed-top">
      <Form
        onSubmit={handleSubmitSignIn}
        noValidate
        validated={validated}
        className="form-area shadow-lg"
      >
        <h3 className="text-center">Sign In</h3>
        <p className="text-center fs-1 font-monospace"></p>
        <Form.Group className="mb-3" controlId="validationCustom01">
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

        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordBlur}
            required
            type="password"
            placeholder="Enter password"
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
        {error ? <p style={{ color: "red" }}>{error.message}</p> : ""}
        <div className="d-grid gap-2">
          <Button type="submit" variant="secondary fw-bold" size="lg">
            Sign In
          </Button>
        </div>
        <p className="text-center">
          Don't have account?{" "}
          <Link className="text-decoration-none" to="/signUp">
            Create an account
          </Link>
        </p>
        {loading && <p>Loading....</p>}
        <img className="img-or" src={logo} alt="" />

        <div className="d-grid gap-2">
          <Button
            onClick={() => signInWithGoogle()}
            variant="outline-dark fw-bold"
            size="lg"
          >
            <span className="p-2">
              <img src={googleIcon} alt="" />
            </span>
            Continue with google
          </Button>
          <Button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              alert("Sent email");
            }}
          >
            Reset password
          </Button>
         
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
