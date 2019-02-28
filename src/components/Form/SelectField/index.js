import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Select from "../../../styled-components/Select";
import ErrorStyledWrapper from "../../../styled-components/ErrorStyledWrapper";

const SelectWrapper = styled.div`
  margin: 0 0 15px 0;
`;

const hasError = (error, touched) => error && touched;

const createOptions = options =>
  options.map(opt => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ));

const SelectField = ({
  input,
  placeholder = "",
  meta: { error, touched },
  options,
  emptyRow = true
}) => (
  <SelectWrapper>
    <Select
      {...input}
      placeholder={placeholder}
      wrap="off"
      hasError={hasError(error, touched)}
    >
      {emptyRow && <option />}
      {options && createOptions(options)}
    </Select>

    {hasError(error, touched) && (
      <ErrorStyledWrapper>{error}</ErrorStyledWrapper>
    )}
  </SelectWrapper>
);

SelectField.displayName = "SelectField";

SelectField.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  emptyRow: PropTypes.bool
};

export default SelectField;
