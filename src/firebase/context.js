import React, { useContext } from "react";

const FirebaseContext = React.createContext(null);

const withFirebase = Component => props => {
  const firebase = useContext(FirebaseContext);
  return <Component {...props} firebase={firebase} />;
};

export { FirebaseContext as default, withFirebase };
