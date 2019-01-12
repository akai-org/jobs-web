import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { mediaQueries } from "../../../styles/mediaQueries";
import LevelType from "../../../consts/LevelType";

import JobOfferSalary from "./JobOfferSalary";
import JobOfferSkill from "./JobOfferSkill";

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  min-width: 280px;

  ${mediaQueries.mobile`
    justify-content: flex-start;
  `}
`;

const JobOfferMetaData = ({ salary, level }) => (
  <StyledWrapper>
    <JobOfferSalary salary={salary} />
    <JobOfferSkill>{LevelType[level].shortName}</JobOfferSkill>
  </StyledWrapper>
);

JobOfferMetaData.propTypes = {
  salary: PropTypes.shape.isRequired,
  level: PropTypes.string.isRequired
};

export default JobOfferMetaData;
