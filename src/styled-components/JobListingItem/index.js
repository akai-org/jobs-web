import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { mediaQueries } from "../../styles/mediaQueries";

const ListingItem = styled.div`
  box-shadow: 0 0 10px #0001;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const JobItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  ${mediaQueries.mobile`
    align-items: flex-start;
    flex-direction: column;
    padding: 10px 10px 20px 10px
  `}
`;

const JobItemHeader = styled.div`
  min-width: 250px;
  max-width: 60rem;
  padding: 10px 0;
`;

const JobItemFooter = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  min-width: 280px;

  ${mediaQueries.mobile`
    margin-left: 0;
  `}
`;

const Bar = styled.div`
  background: lime;
  width: 5px;
  height: 100%;
  position: absolute;
`;

const CompanyImg = styled.img`
  height: 64px;
  margin: 0 15px;
  object-fit: contain;
  width: 64px;
`;

const JobTitle = styled.h4`
  color: ${({ theme }) => theme.color.accent.primary};
  margin: 0 0 3px 0;
  text-decoration: none;
`;

const JobMetaData = styled.div`
  font-size: 14px;
  margin-top: 5px;

  > span {
    &::after {
      content: "·";
      margin: 0 6px;
    }

    &:last-child::after {
      content: "";
    }
  }
`;

const Salary = styled.div`
  color: green;
  margin: 0 10px 0 0;

  ${mediaQueries.mobile`
    font-size: 12px;
  `}
`;

const Skill = styled.div`
  border: 1px solid;
  color: grey;
  border-radius: 40px;
  padding: 5px 10px;
  margin-right: 25px;
  width: 80px;
  text-align: center;

  ${mediaQueries.mobile`
    font-size: 12px;
  `}
`;

const JobListingItem = ({ offer }) => (
  <ListingItem>
    <Bar />
    <CompanyImg src={offer.image} />
    <JobItem>
      <JobItemHeader>
        <JobTitle as={Link} to={`/offer/${offer.id}`}>
          {offer.name}
        </JobTitle>
        <JobMetaData>
          <span>{offer.company}</span>
          <span>{offer.location}</span>
        </JobMetaData>
      </JobItemHeader>
      <JobItemFooter>
        <Salary>{offer.salary}</Salary>
        <Skill>{offer.level}</Skill>
      </JobItemFooter>
    </JobItem>
  </ListingItem>
);

JobListingItem.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobListingItem;
