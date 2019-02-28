import styled from "styled-components";

const HeadingSecondary = styled.h2`
  font-size: ${props => props.theme.font.size.heading.secondary};
  color: ${props => props.theme.color.text.primary};
  font-weight: 700;

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.heading.tertiary};
  `}
`;

export default HeadingSecondary;
