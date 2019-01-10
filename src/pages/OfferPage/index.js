import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Container from "../../components/Container";

const OfferPage = ({ match }) => {
  const [offer, setOffer] = useState(false);
  const [company, setCompany] = useState(false);

  useEffect(() => {
    fetch(`/offer/${match.params.id}.json`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        setOffer(data);
        fetch(`/company/${data.company.toLowerCase()}.json`)
          .then(response => response.json())
          .then(c => setCompany(c));
      })
      .catch(() => {
        // window.location.pathname = "/";
      });
  }, []);

  if (!offer) {
    return "Loading... please wait...";
  }

  return (
    <Container>
      <Link to="/offers">Wróć do listy ofert</Link>
      <img src={offer.image} alt={`Logo ${offer.company}`} />
      <h2>{offer.name}</h2>
      <p>{offer.salary}</p>

      <h3>Wymagane umiejętności</h3>
      <ul>
        {offer.skills.map((skill, i) => (
          <li key={i}>
            {skill.name} - {skill.stars}
          </li>
        ))}
      </ul>

      <h3>Technologie</h3>
      <ul>
        {offer.technologies.map((technology, i) => (
          <li key={i}>{technology.name}</li>
        ))}
      </ul>

      <h3>{offer.description.title}</h3>
      {offer.description.text}

      {company ? (
        <div>
          <h3>O firmie</h3>
          {company.description}
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

OfferPage.propTypes = {
  match: PropTypes.shape.isRequired
};

export default OfferPage;
