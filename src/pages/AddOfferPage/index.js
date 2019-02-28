import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Form, Field } from "react-final-form";

import { Field as CustomField } from "../../components/Form";

import { withAuthUser } from "../../firebase";
import Container from "../../components/Container";
import { required } from "../../validators";

const AddOfferPage = ({ authUser }) => (
  <Container>
    <h3>Email:</h3>
    <p>{authUser && authUser.email}</p>

    <Form onSubmit={() => {}}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            component={CustomField}
            type="text"
            placeholder="Job title"
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
  authUser: PropTypes.object
};

export default withAuthUser(AddOfferPage);
