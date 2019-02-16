import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextArea from "../../../styled-components/TextArea";
import ErrorStyledWrapper from "../../../styled-components/ErrorStyledWrapper";

const TextAreaWrapper = styled.div`
  margin: 0 0 15px 0;
`;

const hasError = (error, touched) => error && touched;

const TextAreaField = ({
  input,
  placeholder = "",
  meta: { error, touched }
}) => (
  <TextAreaWrapper>
    <TextArea
      {...input}
      placeholder={placeholder}
      wrap="off"
      hasError={hasError(error, touched)}
    />
    {hasError(error, touched) && (
      <ErrorStyledWrapper>{error}</ErrorStyledWrapper>
    )}
  </TextAreaWrapper>
);

TextAreaField.displayName = "TextAreaField";

TextAreaField.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string
};

export default TextAreaField;
