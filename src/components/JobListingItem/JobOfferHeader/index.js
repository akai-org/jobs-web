import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import JobOfferTitle from "../JobOfferTitle";
import JobOfferCompany from "../JobOfferCompany";

const StyledWrapper = styled.div`
  padding: 10px 0;
`;

const JobItemHeader = ({ title, company, location, offerId }) => (
  <StyledWrapper>
    <JobOfferTitle as={Link} to={`/offer/${offerId}`}>
      {title}
    </JobOfferTitle>
    <JobOfferCompany company={company} location={location} />
  </StyledWrapper>
);

JobItemHeader.displayName = "JobItemHeader";

JobItemHeader.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  offerId: PropTypes.number
};

export default JobItemHeader;
