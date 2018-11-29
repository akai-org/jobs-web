import React from "react";
import Container from "../../components/Container";

import JobListingItem from "../../styled-components/JobListingItem";

const ListingPage = () => (
  <Container>
    <JobListingItem>
      <div className="bar" />
      <img src="https://via.placeholder.com/60/ddddFF/808080" />
      <div>
        <h4>Junior</h4>
        <div className="metadata">
          <span>Cognifide</span>
          <span>Poznań</span>
        </div>
      </div>
      <div className="salary">3000 - 4500 PLN</div>
      <div className="skill">Level</div>
    </JobListingItem>
  </Container>
);

export default ListingPage;
