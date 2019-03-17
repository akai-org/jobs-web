import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

import FieldArrayContext from "./context";

const ArrayField = ({ name, placeholder, validate, component, options }) => {
  const value = useContext(FieldArrayContext);
  return (
    <Field
      name={`${value.name}.${name}`}
      component={component}
      placeholder={placeholder}
      validate={validate}
      options={options}
    />
  );
};

ArrayField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  validate: PropTypes.func,
  component: PropTypes.any,
  options: PropTypes.array
};

export default ArrayField;
