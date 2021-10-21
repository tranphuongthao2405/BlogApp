import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "components/RegisterForm";
import "./Register.scss";

Register.propTypes = {};

function Register(props) {
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div className="registerform">
      <h1 className="registerform__title">Register</h1>
      <RegisterForm className="registerform__content" onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
