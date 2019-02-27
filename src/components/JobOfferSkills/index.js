import React from "react";
import PropTypes from "prop-types";

import { Column, ColumnContainer } from "../../styled-components/Columns";

const JobOfferSkills = ({ skills }) => (
  <>
    <h2>Wymagane umiejętności</h2>
    <ColumnContainer>
      {skills.map((skill, i) => (
        <Column key={i}>
          {skill.name} - {skill.stars}
        </Column>
      ))}
    </ColumnContainer>
  </>
);

JobOfferSkills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default JobOfferSkills;
