import React, { useContext } from "react";

import { AuthUserContext } from "../index";

const withAuthUser = Component => {
  const WithAuthUser = props => {
    const authUser = useContext(AuthUserContext);

    return <Component {...props} authUser={authUser} />;
  };

  return WithAuthUser;
};

export default withAuthUser;
