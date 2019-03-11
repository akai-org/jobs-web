import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import arrayMutators from "final-form-arrays";

import { Form, Field } from "react-final-form";
import Swal from "sweetalert2";

import { Field as CustomField } from "../../components/Form";

import { withAuthUser, withAuthorization, withFirebase } from "../../firebase";
import Container from "../../components/Container";
import { required } from "../../validators";

import { LevelTypeList } from "../../consts/LevelType";
import { OfferTypeList } from "../../consts/OfferType";
import SelectField from "../../components/Form/SelectField";

import SkillsArrayForm from "../../components/Form/SkillsArrayForm";
import TechnologiesArrayForm from "../../components/Form/TechnologiesArrayForm";

const AddOfferPage = ({ authUser, firebase }) => {
  // const saveOffer = data => console.log(data)
  const saveOffer = data => {
    firebase.firestore
      .collection("companies")
      .doc(authUser.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          firebase.firestore
            .collection("offer")
            .add({ ...data, company: doc.data().companyName })
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
              }).then(() => {});
            });
        } else {
          console.error("Wystąpił problem z autoryzacją!");
        }
      });
  };

  return (
    <Container>
      <h3>Email:</h3>
      <p>{authUser && authUser.email}</p>

      <Form
        onSubmit={saveOffer}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, submitting, mutators: { push } }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              component={CustomField}
              type="text"
              placeholder="Stanowisko"
              validate={required}
            />

            <Field
              name="image"
              component={CustomField}
              type="text"
              placeholder="Łącze do obrazka"
              validate={required}
            />

            <Field
              name="link"
              component={CustomField}
              type="text"
              placeholder="Łącze do oferty"
              validate={required}
            />

            <Field
              name="location"
              component={CustomField}
              type="text"
              placeholder="Lokalizacja"
              validate={required}
            />

            <strong>Widełki płacowe</strong>
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

            <Field
              name="type"
              component={SelectField}
              options={OfferTypeList}
              validate={required}
              placeholder="Kategoria ogłoszenia"
            />

            <Field
              name="level"
              component={SelectField}
              options={LevelTypeList}
              validate={required}
              placeholder="Poziom"
            />

            <Field
              name="description.title"
              component={CustomField}
              type="text"
              placeholder="Tytuł do opisu np. 'Perspektywa rozwoju'"
              validate={required}
            />
            <Field
              name="description.text"
              component={CustomField}
              type="text"
              placeholder="Krótki opis ogłoszenia"
              validate={required}
            />

            <strong>Umiejętności</strong>
            <SkillsArrayForm name="skills" push={push} />

            <strong>Technologie</strong>
            <TechnologiesArrayForm name="technologies" push={push} />

            <button type="submit" disabled={submitting}>
              Dodaj ofertę pracy
            </button>
          </form>
        )}
      />
      <Link to="/">Wróć do strony głównej</Link>
    </Container>
  );
};

AddOfferPage.propTypes = {
  authUser: PropTypes.object,
  firebase: PropTypes.shape
};

const condition = authUser => authUser !== null;

export default compose(
  withFirebase,
  withAuthUser,
  withAuthorization(condition)
)(AddOfferPage);
