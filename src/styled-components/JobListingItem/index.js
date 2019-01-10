import React from "react";
import styled from "styled-components";

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
  margin: 0 25px;
`;

const JobTitle = styled.h4`
  margin: 0 0 3px 0;
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

const JobListingItem = () => (
  <ListingItem>
    <Bar />
    <CompanyImg src="https://via.placeholder.com/60/ddddFF/808080" />
    <div>
      <JobTitle>Junior</JobTitle>
      <JobMetaData>
        <span>Cognifide</span>
        <span>Poznań</span>
      </JobMetaData>
    </div>
    <Salary>3000 - 4500 PLN</Salary>
    <Skill>Level</Skill>
  </ListingItem>
);

export default JobListingItem;
