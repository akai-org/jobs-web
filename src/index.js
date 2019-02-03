import React from "react";
import { render } from "react-dom";

import Firebase, { FirebaseContext } from "./firebase";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

registerServiceWorker();
