import styled from "styled-components";

const Select = styled.select`
  background-color: #ffffff;
  background-image: none;
  border: 0;
  border-bottom: ${({ theme }) => theme.size.border.base} solid
    ${({ theme, hasError }) =>
      hasError ? theme.color.state.error : theme.color.state.success};
  box-shadow: none;
  color: inherit;
  display: block;
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  height: 42px;
  padding: 10px 0;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;

  :focus {
    border-color: #1ab394;
    outline: none;
  }
`;

export default Select;
