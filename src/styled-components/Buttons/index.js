import styled from "styled-components";
import base from "./styles";

export const PrimaryButton = styled.a`
  ${base}

  background: ${({ theme }) => theme.color.accent.primary};
  color: ${props => props.theme.color.text.lighter};
`;

export const SecondaryButton = styled.a`
  ${base}

  background: ${({ theme }) => theme.color.accent.secondary};
  color: ${props => props.theme.color.text.lighter};
`;

export const Button = styled.a`
  ${base}
  
  border: ${({ theme }) => theme.size.border.base} solid
    ${({ theme }) => theme.color.elements.border};
`;
