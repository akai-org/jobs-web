import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import styled from "styled-components";
import Swal from "sweetalert2";

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

const StyledLink = styled(Link)`
  color: ${({ theme, isLogin }) =>
    isLogin ? theme.color.text.base : theme.color.text.light};
  margin-bottom: 10px;
`;

const SignUpContainer = ({ firebase, history }) => {
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

  const createCompanySuccessHandler = result => {
    console.log(result);
    Swal.fire({
      type: "success",
      title: "",
      html: `Konto zostało utworzone!<br /> Proszę poczekać na werywikację konta.`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true
    }).then(res => {
      if (res.value) {
        history.push("/");
      }
    });
  };

  const onSubmitHandler = values =>
    firebase
      .registerUser(values.email, values.password)
      .then(result => createCompany(result.user.uid, values))
      .then(createCompanySuccessHandler)
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
      <StyledLink to="/signin" isLogin>
        Masz już konto? Zaloguj się
      </StyledLink>
      <StyledLink to="/">Wróć do strony głównej</StyledLink>
    </StyledWrapper>
  );
};

SignUpContainer.displayName = "SignUpContainer";

SignUpContainer.propTypes = {
  firebase: PropTypes.object,
  history: PropTypes.object
};

export default compose(
  withFirebase,
  withRouter
)(SignUpContainer);
