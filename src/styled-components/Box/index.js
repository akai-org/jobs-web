import styled, { css } from "styled-components";

const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  background: ${({ theme }) => theme.color.background.base};
  box-shadow: ${({ theme }) => theme.effects.shadow.box};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export default Box;
