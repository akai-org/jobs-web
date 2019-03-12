import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { required } from "../../../validators";
import ArrayInputs from "../ArrayInputs";
import Field from "../Field";
import ArrayFormHeader from "../../../styled-components/ArrayFormHeader";

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 30px;
`;

const InputWrapper = styled.div`
  padding-right: 20px;
  flex-basis: 75%;
  flex-grow: 0;
`;

const TechnologiesArrayForm = ({ label, name, push }) => {
  const onClickHandler = () => push(name, undefined);

  return (
    <TechnologiesContainer>
      <ArrayFormHeader>
        <strong>{label}</strong>
        <ArrayInputs.AddBtn onClickHandler={onClickHandler} />
      </ArrayFormHeader>
      <ArrayInputs fieldsName={name}>
        <StyledWrapper>
          <InputWrapper>
            <ArrayInputs.Field
              validate={required}
              name="name"
              component={Field}
              type="text"
              placeholder="Technologia"
            />
          </InputWrapper>
          <ArrayInputs.RemoveBtn />
        </StyledWrapper>
      </ArrayInputs>
    </TechnologiesContainer>
  );
};

TechnologiesArrayForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  push: PropTypes.func
};

export default TechnologiesArrayForm;
