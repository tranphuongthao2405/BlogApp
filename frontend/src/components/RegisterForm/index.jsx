import InputField from "custom-fields/index";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import * as Yup from "yup";
import "./RegisterForm.scss";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  // TODO: add some more info such as gender, birthdate,...
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("This field is required"),
    lastname: Yup.string().required("This field is required"),
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
        const { value, errors, touched } = formikProps;
        return (
          <Form className="register-form">
            <FastField
              name="firstname"
              type="text"
              component={InputField}
              label="First name"
              placeholder="Please enter your first name"
            />

            <FastField
              name="lastname"
              type="text"
              component={InputField}
              label="Last name"
              placeholder="Please enter your last name"
            />

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

            <FormGroup className="register-form__button-control">
              <Button type="submit" className="register-form__button">
                Submit
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegisterForm;
