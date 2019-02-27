import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Heading from "../../styled-components/Heading";
import formatSallaryToString from "../../utils/formatSallaryToString";

const OfferHeading = styled(Heading)`
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.heading.secondary};
  `}
`;

const StyledWrapper = styled.div``;

const JobOfferHeader = ({
  offer: {
    image,
    company,
    name,
    salary: { min, max }
  }
}) => (
  <StyledWrapper>
    <img src={image} alt={`Logo ${company}`} />
    <OfferHeading>{name}</OfferHeading>
    <p>{formatSallaryToString(min, max)}</p>
  </StyledWrapper>
);

JobOfferHeader.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobOfferHeader;
