import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { required } from "../../../validators";
import ArrayInputs from "../ArrayInputs";
import Field from "../Field";
import SelectField from "../SelectField";
import ArrayFormHeader from "../../../styled-components/ArrayFormHeader";
import { Button } from "../../../styled-components/Buttons";

const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > * {
    flex: 1;
  }
`;

const InputWrapper = styled.div`
  padding-right: 20px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  ${({ theme }) => theme.media.mobile`
    flex: 2;
  `}

  ${Button} {
    margin-left: 10px;
  }
`;

const SkillsContainer = styled.div`
  margin: 30px 0;
`;

const skills = [
  {
    value: 1,
    label: "podstawowy"
  },
  {
    value: 2,
    label: "dobry"
  },
  {
    value: 3,
    label: "bardzo dobry"
  }
];

const SkillsArrayForm = ({ label, name, push }) => {
  const onClickHandler = () => push(name, undefined);

  return (
    <SkillsContainer>
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
              placeholder="Umiejętność"
            />
          </InputWrapper>
          <ControlsWrapper>
            <ArrayInputs.Field
              name="stars"
              component={SelectField}
              options={skills}
              validate={required}
              placeholder="ocena"
            />
            <ArrayInputs.RemoveBtn />
          </ControlsWrapper>
        </StyledWrapper>
      </ArrayInputs>
    </SkillsContainer>
  );
};

SkillsArrayForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  push: PropTypes.func
};

export default SkillsArrayForm;
