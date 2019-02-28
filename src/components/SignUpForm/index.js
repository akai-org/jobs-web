import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import styled from "styled-components";

import {
  Field as CustomField,
  TextAreaField,
  Label,
  RequiredLabel
} from "../Form";

import EmployeesAmount from "../../consts/EmployeesAmount";
import SelectField from "../Form/SelectField";
import Button from "../../styled-components/Button";
import { withFirebase } from "../../firebase";
import { composeValidator, required } from "../../validators";

const FormWrapper = styled.form`
  width: 320px;
`;

const SignUpForm = ({ onSubmitHandler, validPassword, firebase }) => {
  const isEmailTaken = firebase.isEmailTaken();
  const isEmailTakenValidator = async value => {
    const response = await isEmailTaken({ email: value }).then(
      result => result.data
    );
    return response ? "Email jest już zarejestrowany" : null;
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      {({ handleSubmit, submitting }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <RequiredLabel>Email</RequiredLabel>
          <Field
            name="email"
            component={CustomField}
            type="email"
            validate={composeValidator(required, isEmailTakenValidator)}
          />

          <RequiredLabel>Hasło</RequiredLabel>
          <Field
            name="password"
            component={CustomField}
            type="password"
            validate={validPassword}
          />

          <RequiredLabel>Powtórz hasło</RequiredLabel>
          <Field
            name="confirmPassword"
            component={CustomField}
            type="password"
            validate={validPassword}
          />

          <Label>Miasto</Label>
          <Field name="city" component={CustomField} type="text" />

          <Label>Adres</Label>
          <Field name="address" component={CustomField} type="text" />

          <Label>Liczba pracowników</Label>
          <Field
            name="employeesAmount"
            component={SelectField}
            options={EmployeesAmount}
          />

          <Label>Link do zdjęcia</Label>
          <Field name="photoURL" component={CustomField} type="text" />

          <Label>Opis firmy</Label>
          <Field name="description" component={TextAreaField} type="text" />

          <Button type="submit" disabled={submitting}>
            Zarejestruj
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};

SignUpForm.displayName = "SignUpForm";

SignUpForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  validPassword: PropTypes.func,
  firebase: PropTypes.object
};

export default withFirebase(SignUpForm);
