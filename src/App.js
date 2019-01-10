import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import HomePage from "./pages/HomePage/index";
import AboutPage from "./pages/AboutPage/index";
import ContactPage from "./pages/ContactPage/index";
import Layout from "./components/Layout";
import ListingPage from "./pages/ListingPage";
import OfferPage from "./pages/OfferPage";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/offers" component={ListingPage} />
        <Route path="/offer/:id" component={OfferPage} />
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
