import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: ${props => props.theme.font.size.heading.primary};
  color: ${props => props.theme.color.text.primary};
  font-weight: bold;
`;

export default Heading;
