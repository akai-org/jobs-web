import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.effects.shadow.box};
`;

export default Box;
