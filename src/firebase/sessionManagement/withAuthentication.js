import React from "react";

import { AuthUserContext, withFirebase } from "../index";
import useAuthUser from "../hooks/useAuthUser";

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const authUser = useAuthUser(null, props.firebase);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
