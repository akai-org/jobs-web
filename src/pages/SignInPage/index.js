import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";

import Container from "../../components/Container";

const SignInPage = () => {
  async function showResults({ email, password }) {
    return { email, password };
  }

  const required = value => (value ? null : "Required");

  return (
    <Container>
      <Form onSubmit={showResults}>
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

SignInPage.propTypes = {};

export default SignInPage;
