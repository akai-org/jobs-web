import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Container from "../../components/Container";

const OfferPage = ({ match }) => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    fetch(`/offer/${match.params.id}.json`)
      .then(data => data.json())
      .then(data => setOffer(data))
      .catch(() => {
        window.location.pathname = "/";
      });
  }, []);

  if (!offer) {
    return "Loading... please wait...";
  }

  return (
    <Container>
      <Link to="/offers">Wróć do listy ofert</Link>
      <h2>{offer.name}</h2>
      <h2>{offer.salary}</h2>

      <h3>Wymagane umiejętności</h3>

      <h3>Technologie</h3>

      <h3>Perspektywy rozwoju</h3>

      <h3>O firmie</h3>
    </Container>
  );
};

OfferPage.propTypes = {
  match: PropTypes.shape.isRequired
};

export default OfferPage;
