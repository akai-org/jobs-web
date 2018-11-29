import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import HomePage from "./pages/HomePage/index";
import AboutPage from "./pages/AboutPage/index";
import ContactPage from "./pages/ContactPage/index";
import Layout from "./components/Layout";
import ListingPage from "./pages/ListingPage";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Layout>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/offers" component={ListingPage} />
      </Layout>
    </Router>
  </ThemeProvider>
);

export default App;
