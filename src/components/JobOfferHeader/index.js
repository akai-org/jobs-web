import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Heading from "../../styled-components/Heading";
import Salary from "./Salary";
import formatSallaryToString from "../../utils/formatSallaryToString";

const OfferHeading = styled(Heading)`
  margin: 0;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.heading.secondary};
  `}
`;

const HeaderSalary = styled(Salary)`
  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.heading.tertiary};
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 50px;
`;

const ImageContainer = styled.div`
  max-width: 120px;
  margin-right: 20px;
`;

const JobOfferHeader = ({
  offer: { image, company, name, salary: { min, max } = {} }
}) => (
  <StyledWrapper>
    <ImageContainer>
      <img src={image} alt={`Logo ${company}`} />
    </ImageContainer>
    <div>
      <OfferHeading>{name}</OfferHeading>
      <HeaderSalary>{formatSallaryToString(min, max)}</HeaderSalary>
    </div>
  </StyledWrapper>
);

JobOfferHeader.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobOfferHeader;
