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
      <Link to="/signup">Nie posiadasz konta? Zarejestruj się</Link>
      <Link to="/">Wróć do strony głównej</Link>
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
