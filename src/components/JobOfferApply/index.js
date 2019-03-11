import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Box from "../../styled-components/Box";
import { PrimaryButton, Button } from "../../styled-components/Buttons";
import Salary from "../JobOfferHeader/Salary";
import formatSallaryToString from "../../utils/formatSallaryToString";

const Date = styled.p`
  margin: 0 0 50px;
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 700;
`;

const PrimaryButtonMargin = styled(PrimaryButton)`
  margin-bottom: 20px;
`;

const JobOfferApply = ({
  offer: { startDate, salary: { min, max } = {}, link },
  company: { website }
}) => (
  <Box>
    <Salary>{formatSallaryToString(min, max)}</Salary>
    <Date>
      Czas rozpoczęcia:{" "}
      {startDate ? Date(startDate).toLocaleDateString() : "od zaraz"}
    </Date>
    {link && (
      <PrimaryButtonMargin href={link} target="_blank" primary fullWidth>
        Aplikuj
      </PrimaryButtonMargin>
    )}
    {website && (
      <Button href={website} target="_blank" fullWidth>
        Strona pracodawcy
      </Button>
    )}
  </Box>
);

JobOfferApply.defaultProps = {
  company: {}
};

JobOfferApply.propTypes = {
  offer: PropTypes.objectOf({
    startDate: PropTypes.string.isRequired,
    salary: PropTypes.objectOf({
      min: PropTypes.number,
      max: PropTypes.number
    }).isRequired,
    link: PropTypes.string,
    comapnyLink: PropTypes.string.isRequired
  }).isRequired,
  company: PropTypes.objectOf({
    website: PropTypes.string.isRequired
  })
};

export default JobOfferApply;
