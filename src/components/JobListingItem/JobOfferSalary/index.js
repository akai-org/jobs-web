import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.color.text.money};
  margin: 0 10px 0 0;

  ${({ theme }) => theme.media.mobile`
    font-size: 12px;
  `}
`;

const JobOfferSalary = ({ salary }) => {
  const { min, max } = salary;
  return (
    <StyledWrapper>
      {!min && !max && "Bezpłatnie"}
      {min && !max && `${min} PLN`}
      {!min && max && `${max} PLN`}
      {min && max && min !== max && `${min} - ${max} PLN`}
      {min && max && min === max && `${min} PLN`}
    </StyledWrapper>
  );
};

JobOfferSalary.propTypes = {
  salary: PropTypes.shape.isRequired
};

export default JobOfferSalary;
