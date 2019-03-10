import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { compose } from "recompose";

import { Form, Field } from "react-final-form";
import Swal from "sweetalert2";

import { Field as CustomField } from "../../components/Form";

import { withAuthUser, withAuthorization, withFirebase } from "../../firebase";
import Container from "../../components/Container";
import { required } from "../../validators";

const AddOfferPage = ({ authUser, firebase }) => (
  <Container>
    <h3>Email:</h3>
    <p>{authUser && authUser.email}</p>

    <Form
      onSubmit={data => {
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
      }}
    >
      {({ handleSubmit, submitting }) => (
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
            component="select"
            placeholder="Kategoria ogłoszenia"
            validate={required}
          >
            <option />
            <option value="BACKEND">Back-end</option>
            <option value="FRONTEND">Front-end</option>
            <option value="MOBILE">Mobile</option>
          </Field>

          <Field
            name="level"
            component="select"
            placeholder="Poziom"
            validate={required}
          >
            <option />
            <option value="INTERNSHIP">Staż</option>
            <option value="JUNIOR">Junior</option>
            <option value="REGULAR">Regular</option>
          </Field>

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

          <button type="submit" disabled={submitting}>
            Dodaj ofertę pracy
          </button>
        </form>
      )}
    </Form>
    <Link to="/">Wróć do strony głównej</Link>
  </Container>
);
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
