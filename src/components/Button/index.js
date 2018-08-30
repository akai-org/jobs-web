import React, { Component } from "react";
import styled from "styled-components";
import polished from "polished";

const Button = styled.a`
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.font.family.base};
  font-weight: normal;
  border: 0;
  border-radius: 100px;
  background: ${props => props.primary ? 
    props.theme.color.accent.primary : props.theme.color.accent.secondary
  };
  color: ${props => props.theme.color.text.lighter};
  font-size: ${props => props.theme.font.size.label.base};
  line-height: 1.2;
  max-width: ${props => props.primary ? "20em" : "12em"};
  min-width: ${props => props.primary ? "10em" : "8em"};
  padding: ${props => props.primary ? "1rem 2.5rem" : "0.75rem 2rem"};
  transition: opacity ${props => props.theme.effects.transition.quick};
  text-align: center;
  
  &:hover {
    opacity: 0.8;
  }
  
  ${props => props.theme.media.mobile`
    background: dodgerblue;
  `}
`;

export default Button;
