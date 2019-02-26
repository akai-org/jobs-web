import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";
import styled from "styled-components";

import Button from "../../styled-components/Button";
import { required } from "../../validators";
import { Field as CustomField } from "../Form";

const FormWrapper = styled.form`
  width: 320px;
`;

const SignInForm = ({ onSubmitHandler }) => (
  <Form onSubmit={onSubmitHandler}>
    {({ handleSubmit, submitting }) => (
      <FormWrapper onSubmit={handleSubmit}>
        <Field
          name="email"
          component={CustomField}
          type="email"
          placeholder="Email"
          validate={required}
        />

        <Field
          name="password"
          component={CustomField}
          type="password"
          placeholder="Hasło"
          validate={required}
        />
        <Button type="submit" disabled={submitting}>
          Zaloguj
        </Button>
      </FormWrapper>
    )}
  </Form>
);

SignInForm.displayName = "SignInForm";

SignInForm.propTypes = {
  onSubmitHandler: PropTypes.func
};

export default SignInForm;
