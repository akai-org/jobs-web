import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import reducers from "./reducers";
import theme from "./styles/theme";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal } from 'styled-components';

// Better solution may be needed
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext');

  body {
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
    font-size: 14px;
  }
`;

const store = createStore(reducers);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
