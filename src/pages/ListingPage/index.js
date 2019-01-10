import React, { useState, useEffect } from "react";

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
        <JobListingItem key={offer.id} offer={offer} />
      ))}
    </Container>
  );
};

export default ListingPage;
