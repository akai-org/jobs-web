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
const SignInPage = lazy(() => import("./pages/SignInPage"));
const AddOfferPage = lazy(() => import("./pages/AddOfferPage"));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Suspense fallback={""}>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
          <Route exact path="/offers" render={() => <ListingPage />} />
          <Route exact path="/new-offer" render={() => <AddOfferPage />} />
          <Route path="/offer/:id" render={() => <OfferPage />} />
          <Route exact path="/signin" render={() => <SignInPage />} />
        </Suspense>
      </Layout>
    </Router>
  </ThemeProvider>
);

export default withAuthentication(App);
