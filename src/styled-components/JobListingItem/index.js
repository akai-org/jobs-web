import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ListingItem = styled.div`
  box-shadow: 0 0 10px #0001;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  /* justify-content: space-around; */
`;

const Bar = styled.div`
  background: lime;
  width: 5px;
  height: 100%;
  position: absolute;
`;

const CompanyImg = styled.img`
  height: 64px;
  margin: 0 25px;
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
  margin: 0 10px 0 auto;
`;

const Skill = styled.div`
  border: 1px solid;
  color: grey;
  border-radius: 40px;
  padding: 5px 10px;
  margin-right: 25px;
`;

const JobListingItem = ({ offer }) => (
  <ListingItem>
    <Bar />
    <CompanyImg src={offer.image} />
    <div>
      <JobTitle as={Link} to={`/offer/${offer.id}`}>
        {offer.name}
      </JobTitle>
      <JobMetaData>
        <span>{offer.company}</span>
        <span>{offer.location}</span>
      </JobMetaData>
    </div>
    <Salary>{offer.salary}</Salary>
    <Skill>{offer.level}</Skill>
  </ListingItem>
);

JobListingItem.propTypes = {
  offer: PropTypes.shape.isRequired
};

export default JobListingItem;
