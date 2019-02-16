import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import styled from "styled-components";

import { withFirebase } from "../../firebase";
import Container from "../../components/Container";
import {
  Field as CustomField,
  Label,
  RequiredLabel
} from "../../components/Form";
import Heading from "../../styled-components/Heading";
import Button from "../../styled-components/Button";
import { required } from "../../validators";

const StyledWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const FormWrapper = styled.form`
  width: 320px;
`;

const SignUpPage = ({ firebase }) => {
  const removeSensitiveData = company => {
    const newCompany = { ...company };
    delete newCompany.password;
    delete newCompany.confirmPassword;
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

  return (
    <Container>
      <StyledWrapper>
        <Heading>Rejestracja</Heading>
        <Form onSubmit={onSubmitHandler}>
          {({ handleSubmit, submitting }) => (
            <FormWrapper onSubmit={handleSubmit}>
              <RequiredLabel>Email</RequiredLabel>
              <Field
                name="email"
                component={CustomField}
                type="email"
                validate={required}
              />

              <RequiredLabel>Hasło</RequiredLabel>
              <Field
                name="password"
                component={CustomField}
                type="password"
                validate={required}
              />

              <RequiredLabel>Powtórz hasło</RequiredLabel>
              <Field
                name="confirmPassword"
                component={CustomField}
                type="password"
                validate={required}
              />

              <Label>Miasto</Label>
              <Field name="city" component={CustomField} type="text" />

              <Label>Adres</Label>
              <Field name="address" component={CustomField} type="text" />

              <Label>Liczba pracowników</Label>
              <Field
                name="employeesAmount"
                component={CustomField}
                type="text"
              />

              <Label>Link do zdjęcia</Label>
              <Field name="photoURL" component={CustomField} type="text" />

              <Label>Opis firmy</Label>
              <Field name="description" component={CustomField} type="text" />

              <Button type="submit" disabled={submitting}>
                Zarejestruj
              </Button>
            </FormWrapper>
          )}
        </Form>
        <Link to="/signin">Masz już konto? Zaloguj się</Link>
        <Link to="/">Wróć do strony głównej</Link>
      </StyledWrapper>
    </Container>
  );
};

SignUpPage.propTypes = {
  firebase: PropTypes.object
};

export default withFirebase(SignUpPage);
