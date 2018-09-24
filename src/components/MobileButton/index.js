import React, { Component } from "react";
import styled from "styled-components";
import Container from "../Container/index";
import LinkCTA from "../LinkCTA";

class MobileMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HeaderWrapper = styled.header`
      padding: 2rem 0;

      ${props => props.theme.media.mobile`
        font-size: ${props => props.theme.font.size.label.secondary};
        padding: 1rem 0;
      `}
    `;

    const HeaderContent = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;

    const NavList = styled.ul`
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
    `;

    const NavLink = styled.a`
      font-weight: bold;
      margin-right: 3rem;
    `;

    const Logo = styled.div`
      width: 80px;
    `;

    return (
      
    );
  }
}

export default MobileMenu;
