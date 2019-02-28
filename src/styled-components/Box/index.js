import styled from "styled-components";

const Box = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  text-align: center;
  background: ${({ theme }) => theme.color.background.base};
  box-shadow: ${({ theme }) => theme.effects.shadow.box};
`;

export default Box;
