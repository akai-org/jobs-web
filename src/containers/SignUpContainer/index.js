import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SignUpForm from "../../components/SignUpForm";
import Heading from "../../styled-components/Heading";
import { composeValidator, required, regex } from "../../validators";
import { withFirebase } from "../../firebase";

const StyledWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const SignUpContainer = ({ firebase }) => {
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

  const validPassword = composeValidator(
    required,
    regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{8,})$/,
      "Hasło powinno zawierać 1 małą literę, 1 dużą literę, 1 cyfrę"
    )
  );

  return (
    <StyledWrapper>
      <Heading>Rejestracja</Heading>
      <SignUpForm
        onSubmitHandler={onSubmitHandler}
        validPassword={validPassword}
      />
      <Link to="/signin">Masz już konto? Zaloguj się</Link>
      <Link to="/">Wróć do strony głównej</Link>
    </StyledWrapper>
  );
};

SignUpContainer.displayName = "SignUpContainer";

SignUpContainer.propTypes = {
  firebase: PropTypes.object
};

export default withFirebase(SignUpContainer);
