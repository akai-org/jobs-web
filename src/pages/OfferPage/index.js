import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import Container from "../../components/Container";
import JobOfferHeader from "../../components/JobOfferHeader";
import JobOfferSkills from "../../components/JobOfferSkills";
import JobOfferApply from "../../components/JobOfferApply";
import {
  ColumnContainer,
  Column,
  MainColumn,
  SideColumn
} from "../../styled-components/Columns";
import BackButton from "../../styled-components/BackButton";
import HeadingSecondary from "../../styled-components/HeadingSecondary";

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
    return (
      <Container padded>Ładujemy najświeższe dane. Prosimy czekać...</Container>
    );
  }

  return (
    <Container padded>
      <ColumnContainer>
        <MainColumn>
          <BackButton as={Link} to="/offers" small>
            Wróć do listy ofert
          </BackButton>
          <JobOfferHeader offer={offer} />
          <JobOfferSkills skills={offer.skills} />
          <ColumnContainer>
            <Column>
              <HeadingSecondary>Technologie</HeadingSecondary>
              <ul>
                {offer.technologies.map((technology, i) => (
                  <li key={i}>{technology.name}</li>
                ))}
              </ul>
            </Column>
            <Column>
              <HeadingSecondary>{offer.description.title}</HeadingSecondary>
              <p>{offer.description.text}</p>
            </Column>
          </ColumnContainer>

          {company ? (
            <div>
              <HeadingSecondary>O firmie</HeadingSecondary>
              <p>{company.description}</p>
            </div>
          ) : (
            ""
          )}
        </MainColumn>
        <SideColumn>
          <JobOfferApply offer={offer} company={company} />
        </SideColumn>
      </ColumnContainer>
    </Container>
  );
};

OfferPage.propTypes = {
  match: PropTypes.shape.isRequired
};

export default withRouter(OfferPage);
