import React, { useState, useEffect } from "react";

import Container from "../../components/Container";
import JobListingItem from "../../components/JobListingItem";
import JobListingPage from "../../styled-components/JobListingPage";

const ListingPage = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(data => data.json())
      .then(data => setOffers(data));
  }, []);

  return (
    <Container padded>
      <JobListingPage>
        {offers.map(offer => (
          <JobListingItem key={offer.id} offer={offer} />
        ))}
      </JobListingPage>
    </Container>
  );
};

export default ListingPage;
