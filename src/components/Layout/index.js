import React from "react";
import PropTypes from "prop-types";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import GlobalStyle from "../../styles/GlobalStyle";

const Layout = props => (
  <>
    <GlobalStyle />
    <Header />
    {props.children}
    <Footer />
  </>
);

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
