import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&subset=latin-ext');

  body {
    font-family: "Lato", sans-serif;
    font-size: ${props => props.theme.font.size.base};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const Layout = props => (
  <LayoutWrapper>
    <GlobalStyle />
    <Header />
    {props.children}
    <Footer />
  </LayoutWrapper>
);

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
