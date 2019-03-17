import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../../components/Container/index";
import logo from "../../assets/images/logo.svg";
import Navigation from "../Navigation";

const StyledWrapper = styled.header`
  padding: 1rem 0;
  border-bottom: ${({ theme }) => theme.size.border.base} solid
    ${({ theme }) => theme.color.elements.line};

  ${({ theme }) => theme.media.mobile`
    font-size: ${props => props.theme.font.size.label.secondary};
  `};
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  width: 120px;
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
