import React, { Component } from "react";
import Heading from "../Heading/index";
import styled from "styled-components";
import Button from "../Button/index";

const Wrapper = styled.div`
  font-family: ${props => props.theme.font.family.base};
`;

class StyleGuide extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>Akai Jobs Style Guide</Heading>
        <Button primary>Primary button</Button>
        <Button>Secondary button</Button>
      </Wrapper>
    );
  }
}


export default StyleGuide;
