import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase, useAuthUser } from "../index";

const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    const authUser = useAuthUser(null, props.firebase);
    useEffect(() => {
      if (!condition(authUser)) {
        props.history.push("/");
      }
    }, []);

    return <Component {...props} />;
  };

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
