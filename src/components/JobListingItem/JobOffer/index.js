import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import JobOfferHeader from "./JobOfferHeader";
import JobOfferMetaData from "./JobOfferMetaData";

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.media.mobile`
    align-items: flex-start;
    flex-direction: column;
    padding: 10px 10px 20px 10px
  `}
`;

const JobOffer = ({ offer }) => {
  const { name, company, location, id, salary, level } = offer;

  return (
    <StyledWrapper>
      <JobOfferHeader
        title={name}
        company={company}
        location={location}
        offerId={id}
      />
      <JobOfferMetaData salary={salary} level={level} />
    </StyledWrapper>
  );
};

JobOffer.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobOffer;
