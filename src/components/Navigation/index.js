import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import StyledCTA from "../StyledCTA";

const StyledOverlay = styled.div`
  background: ${({ theme }) => theme.color.background.dark};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.effects.transition.base},
    visibility ${({ theme }) => theme.effects.transition.none} 0.4s;
  visibility: hidden;
  z-index: 100;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 0.2;
      visibility: visible;
      transition: opacity ${({ theme }) => theme.effects.transition.base},
        visibility ${({ theme }) => theme.effects.transition.none} 0s;
    `};
`;

const StyledNav = styled.nav`
  box-sizing: border-box;
  background: ${props => props.theme.color.background.base};
  display: flex;

  ${({ theme }) => theme.media.tablet`
    position: fixed;
    display: block;
    width: 100%;
    top: 0;
    left: 0;
    padding: 10rem 2rem 4rem;
    transform: translateY(-100%);
    z-index: 200;
    transition: transform ${props => props.theme.effects.transition.base} 0.2s;

    ${props =>
      props.isMenuOpened &&
      `
      transform: translateY(0);
      transition-delay: 0s;
    `}
  `}
  ${({ theme }) => theme.media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};
`;

const StyledWrapper = styled.div`
  display: flex;

  ${props => props.theme.media.tablet`
    display: block;
    opacity: 0;
    transition: opacity ${props.theme.effects.transition.base} 0s;

    ${props.isMenuOpened &&
      `
      opacity: 1;
      transition-delay: 0.2s;
    `}
  `};
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.tablet`
    display: block;
    margin-bottom: 2rem;
  `};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  margin-right: 3rem;
  text-decoration: none;
  color: ${props => props.theme.color.text.primary};
  transition: opacity ${props => props.theme.effects.transition.quick};

  &:hover {
    opacity: ${props => props.theme.effects.hover.opacity};
  }

  ${({ theme }) => theme.media.tablet`
    margin-right: 0;
    padding: 1rem 0;
    font-size: ${props => props.theme.font.size.label.primary};
    font-weight: normal;
  `};
`;

const StyledButton = styled.button`
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
  height: 40px;
  margin-left: auto;
  outline: 0;
  right: 0;
  padding: 10px;
  width: 40px;
  position: relative;
  z-index: 300;

  &:focus,
  &:active {
    outline: 0;
  }

  ${({ theme }) => theme.media.tablet`
    display: flex;
  `};
`;

const StyledInner = styled.span`
  &,
  &::before,
  &::after {
    background: ${props => props.theme.color.elements.menu};
    content: "";
    position: relative;
    display: block;
    height: 2px;
    transition: transform ${props => props.theme.effects.transition.quick},
      background-color 0s ease-out 0.2s,
      top ${props => props.theme.effects.transition.quick} 0.3s;
    width: 30px;
  }

  &::before {
    top: 8px;
  }

  &::after {
    top: -10px;
  }

  ${props =>
    props.isMenuOpened &&
    `
    &,
    &::before,
    &::after {
      transition: top ${props.theme.effects.transition.quick},
        background-color 0s ease-out 0.2s,
        transform ${props.theme.effects.transition.quick} 0.3s;
    }

    & {
      background: transparent;

      &::before {
        top: 0;
        transform: rotate(45deg);
      }
  
      &::after {
        top: -2px;
        transform: rotate(-45deg);
      }
    }
  `};
`;

const Navigation = () => {
  const [menuState, setMenuState] = useState(false);

  const onLinkClick = () => {
    setMenuState(false);
  };

  const onOverlayClick = () => {
    setMenuState(false);
  };

  return (
    <Fragment>
      <StyledNav isMenuOpened={menuState}>
        <StyledWrapper isMenuOpened={menuState}>
          <StyledList>
            <li>
              <StyledLink to="/about" onClick={onLinkClick}>
                O nas
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/contact" onClick={onLinkClick}>
                Contact
              </StyledLink>
            </li>
          </StyledList>
          <StyledCTA to="/" onClick={onLinkClick}>
            Dodaj ofertę
          </StyledCTA>
        </StyledWrapper>
      </StyledNav>
      <StyledButton onClick={() => setMenuState(!menuState)}>
        <StyledInner isMenuOpened={menuState} />
      </StyledButton>
      <StyledOverlay isVisible={menuState} onClick={onOverlayClick} />
    </Fragment>
  );
};

Navigation.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  onMobileMenuButtonClick: PropTypes.func.isRequired,
  onOverlayClick: PropTypes.func.isRequired
};

export default Navigation;
