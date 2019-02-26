import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase, AuthUserContext } from "../index";

const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    const authUser = useContext(AuthUserContext);

    useEffect(() => {
      if (!condition(authUser)) {
        props.history.push("/");
      }
    }, []);

    return <>{condition(authUser) && <Component {...props} />}</>;
  };

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
