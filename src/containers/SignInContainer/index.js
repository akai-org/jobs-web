import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";

import { withFirebase } from "../../firebase";
import Heading from "../../styled-components/Heading";
import SignInForm from "../../components/SignInForm";

const StyledWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme, isRegister }) =>
    isRegister ? theme.color.text.base : theme.color.text.light};
  margin-bottom: 10px;
`;

const SignInContainer = ({ firebase, history }) => {
  const onSubmitHandler = values =>
    firebase
      .login(values.email, values.password)
      .then(() => history.push("/new-offer"))
      .catch(error => console.log(error));

  return (
    <StyledWrapper>
      <Heading>Logowanie</Heading>
      <SignInForm onSubmitHandler={onSubmitHandler} />
      <StyledLink to="/signup" isRegister>
        Nie posiadasz konta? Zarejestruj się
      </StyledLink>
      <StyledLink to="/">Wróć do strony głównej</StyledLink>
    </StyledWrapper>
  );
};

SignInContainer.propTypes = {
  firebase: PropTypes.object,
  history: PropTypes.object
};

export default compose(
  withRouter,
  withFirebase
)(SignInContainer);
