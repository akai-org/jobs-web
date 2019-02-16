import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { compose } from "recompose";
import styled from "styled-components";

import { withFirebase } from "../../firebase";
import Container from "../../components/Container";
import { Field as CustomField } from "../../components/Form";
import Heading from "../../styled-components/Heading";
import Button from "../../styled-components/Button";
import { required } from "../../validators";

const StyledWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const FormWrapper = styled.form`
  width: 320px;
`;

const SignInPage = ({ firebase, history }) => {
  const onSubmitHandler = values =>
    firebase
      .login(values.email, values.password)
      .then(() => history.push("/new-offer"))
      .catch(error => console.log(error));

  return (
    <Container>
      <StyledWrapper>
        <Heading>Logowanie</Heading>
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
        <Link to="/signup">Nie posiadasz konta? Zarejestruj się</Link>
        <Link to="/">Wróć do strony głównej</Link>
      </StyledWrapper>
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
