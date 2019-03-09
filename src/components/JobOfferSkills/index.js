import React from "react";
import PropTypes from "prop-types";

import { Column, ColumnContainer } from "../../styled-components/Columns";
import HeadingSecondary from "../../styled-components/HeadingSecondary";

import JobOfferSkill from "./JobOfferSkill";

const JobOfferSkills = ({ skills }) => (
  <>
    <HeadingSecondary>Wymagane umiejętności</HeadingSecondary>
    <ColumnContainer narrow wrap>
      {skills.map(({ name, stars }, i) => (
        <Column key={i}>
          <JobOfferSkill name={name} stars={stars} />
        </Column>
      ))}
    </ColumnContainer>
  </>
);

JobOfferSkills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default JobOfferSkills;
