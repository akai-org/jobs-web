import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;

const BreakDot = styled.span`
  margin: 0 6px;
`;

const JobOfferCompany = ({ company, location }) => (
  <StyledWrapper>
    {company && <span>{company}</span>}
    {company && location && <BreakDot>·</BreakDot>}
    {location && <span>{location}</span>}
  </StyledWrapper>
);

JobOfferCompany.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string
};

export default JobOfferCompany;
