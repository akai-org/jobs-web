import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

import { withFirebase } from "../../firebase";
import Container from "../../components/Container";

const SignUpPage = ({ firebase }) => {
  const removeSensitiveData = company => {
    const newCompany = { ...company };
    delete newCompany.password;
    delete newCompany.retypePassword;
    return newCompany;
  };

  const createCompany = (userUUID, company) => {
    const newCompany = {
      ...removeSensitiveData(company),
      userID: userUUID
    };
    return firebase.createCompany(userUUID, newCompany);
  };

  const onSubmitHandler = values =>
    firebase
      .registerUser(values.email, values.password)
      .then(result => createCompany(result.user.uid, values))
      .then(result => console.log(result))
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

            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="password"
                validate={required}
              />
            </div>

            <div>
              <label>Confirm Password</label>
              <Field
                name="retypePassword"
                component="input"
                type="password"
                placeholder="confirm password"
                validate={required}
              />
            </div>

            <div>
              <label>Company Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="company name"
                validate={required}
              />
            </div>

            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </form>
        )}
      </Form>
    </Container>
  );
};

SignUpPage.propTypes = {
  firebase: PropTypes.object
};

export default withFirebase(SignUpPage);
