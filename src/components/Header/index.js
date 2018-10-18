import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../Container/index";
import logo from "../../assets/images/logo.svg";
import Navigation from "../../containers/Navigation";
import { mediaQueries } from './../../styles/mediaQueries'

const StyledWrapper = styled.header`
  padding: 1rem 0;

  ${props => mediaQueries.mobile`
    font-size: ${props => props.theme.font.size.label.secondary};
  `}
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  width: 80px;
  position: relative;
  z-index: 300;
`;

const Header = () => (
  <StyledWrapper>
    <Container>
      <StyledContent>
        <Link to="/">
          <StyledLogo src={logo} />
        </Link>
        <Navigation />
      </StyledContent>
    </Container>
  </StyledWrapper>
);

export default Header;
