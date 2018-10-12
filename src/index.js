import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from "./reducers";
import theme from "./styles/theme";
import HomePage from "./containers/HomePage/index";
import AboutPage from "./containers/AboutPage/index";
import ContactPage from "./containers/ContactPage/index";
import registerServiceWorker from "./registerServiceWorker";
import Layout from "./components/Layout";
import "normalize.css";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Layout>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
