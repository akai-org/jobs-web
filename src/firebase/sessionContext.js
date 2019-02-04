import React, { useState, useEffect } from "react";

import { withFirebase } from "./context";

const AuthUserContext = React.createContext(null);

const withAuthentication = Component => {
  const WithAuthentication = props => {
    // TODO: change to hook ???
    const [authUser, setAuthUser] = useState(null);
    useEffect(
      () => {
        const authUserListener = props.firebase.auth.onAuthStateChanged(
          authenticatedUser =>
            authenticatedUser
              ? setAuthUser(authenticatedUser)
              : setAuthUser(null)
        );

        return () => authUserListener();
      },
      [authUser]
    );

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export { AuthUserContext as default, withAuthentication };
