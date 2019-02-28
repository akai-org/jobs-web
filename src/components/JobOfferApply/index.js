import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Box from "../../styled-components/Box";
import LinkCTA from "../../styled-components/LinkCTA";
import Salary from "../JobOfferHeader/Salary";
import formatSallaryToString from "../../utils/formatSallaryToString";

const Date = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 700;
`;

const ApplyLink = styled(LinkCTA)`
  box-sizing: border-box;
  max-width: none;
  margin-top: 20px;
  width: 100%;
`;

const JobOfferApply = ({
  offer: {
    startDate,
    salary: { min, max },
    link
  },
  company: { website }
}) => (
  <Box>
    <Salary>{formatSallaryToString(min, max)}</Salary>
    <Date>
      Czas rozpoczęcia:{" "}
      {startDate ? Date(startDate).toLocaleDateString() : "od zaraz"}
    </Date>
    {link && (
      <ApplyLink href={link} target="_blank" primary>
        Aplikuj
      </ApplyLink>
    )}
    {website && (
      <ApplyLink href={website} target="_blank">
        Strona pracodawcy
      </ApplyLink>
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
