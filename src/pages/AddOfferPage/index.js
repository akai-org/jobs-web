import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withAuthUser } from "../../firebase";
import Container from "../../components/Container";

const AddOfferPage = ({ authUser }) => (
  <Container>
    <h3>Email:</h3>
    <p>{authUser && authUser.email}</p>
    <Link to="/">Wróć do strony głównej</Link>
  </Container>
);

AddOfferPage.propTypes = {
  authUser: PropTypes.object
};

export default withAuthUser(AddOfferPage);
