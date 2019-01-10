import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import JobListingItem from "../../styled-components/JobListingItem";

const ListingPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(data => data.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <Container>
      {offers.map(offer => (
        <JobListingItem key={offer.id}>
          <div className="bar" />
          <img src="https://via.placeholder.com/60/ddddFF/808080" />
          <div>
            <h4>
              <Link to={`/offer/${offer.id}`}>{offer.name}</Link>
            </h4>
            <div className="metadata">
              <span>{offer.company}</span>
              <span>{offer.location}</span>
            </div>
          </div>
          <div className="salary">{offer.salary}</div>
          <div className="skill">{offer.level}</div>
        </JobListingItem>
      ))}
    </Container>
  );
};

export default ListingPage;
