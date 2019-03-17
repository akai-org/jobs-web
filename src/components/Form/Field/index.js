import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../../../styled-components/Input";
import ErrorStyledWrapper from "../../../styled-components/ErrorStyledWrapper";

const InputWrapper = styled.div`
  margin: 0 0 20px 0;
`;

const hasError = (error, touched) => error && touched;

const Field = ({
  input,
  type = "text",
  placeholder = "",
  meta: { error, touched }
}) => (
  <InputWrapper>
    <Input
      {...input}
      type={type}
      placeholder={placeholder}
      hasError={hasError(error, touched)}
    />
    {hasError(error, touched) && (
      <ErrorStyledWrapper>{error}</ErrorStyledWrapper>
    )}
  </InputWrapper>
);

Field.displayName = "Field";

Field.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string
};

export default Field;
