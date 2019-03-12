import styled from "styled-components";

const Input = styled.input`
  background-color: #ffffff;
  background-image: none;
  border: 0;
  border-bottom: ${({ theme }) => theme.size.border.base} solid
    ${({ theme, hasError }) =>
      hasError ? theme.color.state.error : theme.color.state.success};
  box-shadow: none;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 14px;
  height: 34px;
  padding: 20px 0;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;

  :focus {
    border-color: ${({ theme }) => theme.color.accent.primary};
    outline: none;
  }
`;

export default Input;
