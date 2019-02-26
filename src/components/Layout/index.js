import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import GlobalStyle from "../../styles/GlobalStyle";

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
