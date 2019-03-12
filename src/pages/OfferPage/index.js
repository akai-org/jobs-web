import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../../firebase";

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
import { pageView } from "../../services/AnalyticsService";

const OfferPage = ({ match, firebase }) => {
  const [offer, setOffer] = useState(false);
  const [company, setCompany] = useState(false);

  useEffect(() => {
    pageView();
    firebase.firestore
      .collection("offer")
      .doc(match.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setOffer({ id: doc.id, ...doc.data() });

          firebase.firestore
            .collection("companies")
            .where("name", "==", doc.data().company)
            .get()
            .then(query => {
              query.forEach(doc2 => {
                setCompany({ id: doc2.id, ...doc2.data() });
              });
            });
        }
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
          {offer.skills && <JobOfferSkills skills={offer.skills} />}
          <ColumnContainer>
            {offer.technologies && (
              <Column>
                <HeadingSecondary>Technologie</HeadingSecondary>
                <ul>
                  {offer.technologies.map((technology, i) => (
                    <li key={i}>{technology.name}</li>
                  ))}
                </ul>
              </Column>
            )}
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
  match: PropTypes.shape.isRequired,
  firebase: PropTypes.shape.isRequired
};

export default compose(
  withFirebase,
  withRouter
)(OfferPage);
