import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 0 2rem;

  ${props =>
    props.fullWidth ? "width: 100%;" : "max-width: 1200px; margin: 0 auto"}

  ${({ theme }) => theme.media.mobile`
    padding-left: 1rem;
    padding-right: 1rem;
  `};

  ${({ padded }) =>
    padded &&
    css`
      padding-top: 2rem;
      padding-bottom: 2rem;
    `}
`;

export default Container;
