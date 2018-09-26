import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { createGlobalStyle } from 'styled-components';

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

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
    <GlobalStyle />
  </div>
);

export default Layout;
