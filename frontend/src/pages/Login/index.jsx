import React from "react";
import PropTypes from "prop-types";
import LoginForm from "components/LoginForm";
import { Container, Row } from "reactstrap";
import "./Login.scss";

Login.propTypes = {};

function Login(props) {
  // TODO: handle submit and redirect
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="form">
      <h1 className="form__title">Sign in</h1>
      <LoginForm className="form__content" onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
