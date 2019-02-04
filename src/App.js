import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { withAuthentication } from "./firebase";
import theme from "./styles/theme";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage/index"));
const AboutPage = lazy(() => import("./pages/AboutPage/index"));
const ContactPage = lazy(() => import("./pages/ContactPage/index"));
const ListingPage = lazy(() => import("./pages/ListingPage"));
const OfferPage = lazy(() => import("./pages/OfferPage"));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Suspense fallback={""}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/offers" component={ListingPage} />
          <Route path="/offer/:id" component={OfferPage} />
        </Suspense>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default withAuthentication(App);
