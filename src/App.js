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
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
          <Route exact path="/offers" render={() => <ListingPage />} />
          <Route path="/offer/:id" render={() => <OfferPage />} />
        </Suspense>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default withAuthentication(App);
