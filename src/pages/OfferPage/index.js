import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import JobOfferHeader from "../../components/JobOfferHeader";
import JobOfferSkills from "../../components/JobOfferSkills";
import { ColumnContainer, Column } from "../../styled-components/Columns";

const OfferPage = ({ match }) => {
  const [offer, setOffer] = useState(false);
  const [company, setCompany] = useState(false);

  useEffect(() => {
    fetch(`/offer/${match.params.id}.json`)
      .then(data => data.json())
      .then(data => {
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
      <JobOfferHeader offer={offer} />
      <JobOfferSkills skills={offer.skills} />
      <ColumnContainer>
        <Column>
          <h2>Technologie</h2>
          <ul>
            {offer.technologies.map((technology, i) => (
              <li key={i}>{technology.name}</li>
            ))}
          </ul>
        </Column>
        <Column>
          <h2>{offer.description.title}</h2>
          <p>{offer.description.text}</p>
        </Column>
      </ColumnContainer>

      {company ? (
        <div>
          <h2>O firmie</h2>
          <p>{company.description}</p>
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
