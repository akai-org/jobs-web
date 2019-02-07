import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { compose } from "recompose";

import { withFirebase } from "../../firebase";
import Container from "../../components/Container";

const SignInPage = ({ firebase, history }) => {
  // async function showResults({ email, password }) {
  //   firebase.login(email, password);
  //   return { email, password };
  // }

  const onSubmitHandler = values =>
    firebase
      .login(values.email, values.password)
      .then(() => history.push("/new-offer"))
      .catch(error => console.log(error));

  const required = value => (value ? null : "Required");

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="email address" validate={required}>
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Email</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
              validate={required}
            />
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </form>
        )}
      </Form>
      <Link to="/">Wróć do strony głównej</Link>
    </Container>
  );
};

SignInPage.propTypes = {
  firebase: PropTypes.object,
  history: PropTypes.object
};

export default compose(
  withRouter,
  withFirebase
)(SignInPage);
