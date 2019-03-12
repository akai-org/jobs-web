import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { required } from "../../../validators";
import ArrayInputs from "../ArrayInputs";
import Field from "../Field";
import SelectField from "../SelectField";
import ArrayFormHeader from "../../../styled-components/ArrayFormHeader";

const StyledWrapper = styled.div`
  display: flex;
`;

const SkillsContainer = styled.div`
  margin-bottom: 15px;
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
          <ArrayInputs.Field
            validate={required}
            name="name"
            component={Field}
            type="text"
            placeholder="Umiejętność"
          />
          <ArrayInputs.Field
            name="stars"
            component={SelectField}
            options={skills}
            validate={required}
            placeholder="ocena"
          />
          <ArrayInputs.RemoveBtn />
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
