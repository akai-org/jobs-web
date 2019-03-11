import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { required } from "../../../validators";
import ArrayInputs from "../ArrayInputs";
import Field from "../Field";

const StyledWrapper = styled.div`
  display: flex;
`;

const TechnologiesContainer = styled.div`
  margin-bottom: 15px;
`;

const TechnologiesArrayForm = ({ name, push }) => {
  const onClickHandler = () => push(name, undefined);

  return (
    <TechnologiesContainer>
      <ArrayInputs.AddBtn onClickHandler={onClickHandler} />
      <ArrayInputs fieldsName={name}>
        <StyledWrapper>
          <ArrayInputs.Field
            validate={required}
            name="name"
            component={Field}
            type="text"
            placeholder="Technologia"
          />
          <ArrayInputs.RemoveBtn />
        </StyledWrapper>
      </ArrayInputs>
    </TechnologiesContainer>
  );
};

TechnologiesArrayForm.propTypes = {
  name: PropTypes.string,
  push: PropTypes.func
};

export default TechnologiesArrayForm;
