import styled from "styled-components";

const Heading = styled.h1`
  font-size: ${props => props.theme.font.size.heading.primary};
  color: ${props => props.theme.color.text.primary};
  font-weight: 700;
  margin: 3rem 0 0;
`;

export default Heading;
