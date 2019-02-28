import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Box from "../../styled-components/Box";
import LinkCTA from "../../styled-components/LinkCTA";

const Date = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-weight: 700;
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
    <Date>
      Czas rozpoczęcia:{" "}
      {startDate ? Date(startDate).toLocaleDateString() : "od zaraz"}
    </Date>
    {link && (
      <LinkCTA href={link} target="_blank" primary>
        Aplikuj
      </LinkCTA>
    )}
    {website && (
      <LinkCTA href={website} target="_blank">
        Strona pracodawcy
      </LinkCTA>
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
