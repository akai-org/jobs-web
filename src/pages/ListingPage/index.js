import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withFirebase } from "../../firebase";

import Container from "../../components/Container";
import JobListingItem from "../../components/JobListingItem";
import JobListingPage from "../../styled-components/JobListingPage";

const ListingPage = ({ firebase }) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    firebase.firestore
      .collection("offer")
      .get()
      .then(querySnapshot => {
        const docs = [];
        querySnapshot.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
        setOffers(docs);
      });
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

ListingPage.propTypes = {
  firebase: PropTypes.shape
};

export default withFirebase(ListingPage);
