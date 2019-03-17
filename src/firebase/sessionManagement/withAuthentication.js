import React from "react";
import PropTypes from "prop-types";

import { AuthUserContext, withFirebase } from "../index";
import useAuthUser from "../hooks/useAuthUser";

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const authUser = useAuthUser(undefined, props.firebase);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  WithAuthentication.propTypes = {
    firebase: PropTypes.object
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
