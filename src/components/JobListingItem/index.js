import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import VerticalBar from "../../styled-components/VerticalBar";
import CompanyImg from "../../styled-components/CompanyImg";
import JobOffer from "./JobOffer";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 0;

  &:hover {
    box-shadow: 0 0 10px #0002;
  }
`;

const JobListingItem = ({ offer }) => (
  <StyledWrapper>
    <VerticalBar type={offer.type} />
    <CompanyImg src={offer.image} />
    <JobOffer offer={offer} />
  </StyledWrapper>
);

JobListingItem.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobListingItem;
