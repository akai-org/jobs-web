import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import arrayMutators from "final-form-arrays";

import { Form, Field } from "react-final-form";
import Swal from "sweetalert2";

import { pageView } from "../../services/AnalyticsService";

import { Field as CustomField } from "../../components/Form";

import { withAuthUser, withAuthorization, withFirebase } from "../../firebase";
import Container from "../../components/Container";
import { required } from "../../validators";

import { LevelTypeList } from "../../consts/LevelType";
import { OfferTypeList } from "../../consts/OfferType";
import SelectField from "../../components/Form/SelectField";

import SkillsArrayForm from "../../components/Form/SkillsArrayForm";
import TechnologiesArrayForm from "../../components/Form/TechnologiesArrayForm";

import Heading from "../../styled-components/Heading";
import Subheading from "../../styled-components/Subheading";
import HeadingSecondary from "../../styled-components/HeadingSecondary";
import BackButton from "../../styled-components/BackButton";
import { PrimaryButton } from "../../styled-components/Buttons";
import { Column, ColumnContainer } from "../../styled-components/Columns";

const MarginButton = styled(PrimaryButton)`
  margin: 20px 0 50px;
`;

const AddOfferPage = ({ authUser, firebase, history }) => {
  pageView();
  const saveOffer = data => {
    firebase.firestore
      .collection("companies")
      .doc(authUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          firebase.firestore
            .collection("offer")
            .add({
              ...data,
              timestamp: new Date().getTime(),
              company: doc.data().companyName
            })
            .then(() => {
              Swal.fire({
                type: "success",
                title: "",
                html: `Oferta została dodana pomyślnie.`,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
                focusConfirm: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: true
              }).then(() => {
                history.push("/offers");
              });
            });
        } else {
          console.error("Wystąpił problem z autoryzacją!");
        }
      });
  };

  return (
    <Container padded>
      <BackButton as={Link} to="/" small>
        Wróć do strony głównej
      </BackButton>
      <Heading>Dodaj ofertę</Heading>
      <Subheading as="p">{authUser && authUser.email}</Subheading>

      <Form
        onSubmit={saveOffer}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, submitting, mutators: { push } }) => (
          <form onSubmit={handleSubmit}>
            <ColumnContainer>
              <Column>
                <HeadingSecondary>Informacje ogólne</HeadingSecondary>
                <Field
                  name="name"
                  component={CustomField}
                  type="text"
                  placeholder="Stanowisko"
                  validate={required}
                  validateFields={["name"]}
                />

                <Field
                  name="location"
                  component={CustomField}
                  type="text"
                  placeholder="Lokalizacja"
                  validate={required}
                  validateFields={["location"]}
                />

                <Field
                  name="type"
                  component={SelectField}
                  options={OfferTypeList}
                  validate={required}
                  placeholder="Kategoria ogłoszenia"
                  validateFields={["type"]}
                />

                <Field
                  name="level"
                  component={SelectField}
                  options={LevelTypeList}
                  validate={required}
                  placeholder="Poziom"
                  validateFields={["level"]}
                />

                <HeadingSecondary>Opis ogłoszenia</HeadingSecondary>
                <Field
                  name="description.title"
                  component={CustomField}
                  type="text"
                  placeholder="Tytuł do opisu np. 'Perspektywa rozwoju'"
                  validate={required}
                  validateFields={["description.title"]}
                />
                <Field
                  name="description.text"
                  component={CustomField}
                  type="text"
                  placeholder="Krótki opis ogłoszenia"
                  validate={required}
                  validateFields={["description.text"]}
                />
              </Column>
              <Column>
                <HeadingSecondary>Widełki płacowe</HeadingSecondary>
                <Field
                  name="salary.min"
                  component={CustomField}
                  type="number"
                  placeholder="Wynagrodzenie minimalne"
                />
                <Field
                  name="salary.max"
                  component={CustomField}
                  type="number"
                  placeholder="Wynagrodzenie maksymalne"
                />

                <HeadingSecondary>Wymagania</HeadingSecondary>

                <SkillsArrayForm
                  label="Umiejętności"
                  name="skills"
                  push={push}
                />

                <TechnologiesArrayForm
                  label="Technologie"
                  name="technologies"
                  push={push}
                />

                <HeadingSecondary>Linki</HeadingSecondary>
                <Field
                  name="image"
                  component={CustomField}
                  type="text"
                  placeholder="Link do obrazka"
                  validate={required}
                  validateFields={["image"]}
                />

                <Field
                  name="link"
                  component={CustomField}
                  type="text"
                  placeholder="Link do oferty"
                  validate={required}
                  validateFields={["link"]}
                />
              </Column>
            </ColumnContainer>

            <MarginButton large as="button" type="submit" disabled={submitting}>
              Dodaj ofertę pracy
            </MarginButton>
          </form>
        )}
      />
    </Container>
  );
};

AddOfferPage.propTypes = {
  authUser: PropTypes.object,
  firebase: PropTypes.object,
  history: PropTypes.object
};

const condition = authUser => authUser !== null;

export default compose(
  withFirebase,
  withAuthUser,
  withAuthorization(condition),
  withRouter
)(AddOfferPage);
