import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import FormFeedback from "reactstrap/lib/FormFeedback";
import "./InputField.scss";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.string,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup className="formgroup">
      {label && (
        <Label className="formgroup__label" for={name}>
          {label}
        </Label>
      )}
      <Input
        className="formgroup__input"
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
