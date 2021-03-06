import InputField from "custom-fields/index";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";
import "./LoginForm.scss";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  onSubmit: null,
};

function LoginForm(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;

        return (
          <Form className="login-form">
            <FastField
              name="email"
              type="text"
              component={InputField}
              label="Email"
              placeholder="Please enter your email"
            />

            <FastField
              name="password"
              type="password"
              component={InputField}
              label="Password"
              placeholder="Please enter your password"
            />

            <FormGroup className="login-form__button-control">
              <Button type="submit" className="login-form__button">
                Submit
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
