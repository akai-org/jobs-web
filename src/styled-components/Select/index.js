import styled from "styled-components";

const Select = styled.select`
  background-color: #ffffff;
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.hasError ? "#ED4337" : "#e5e6e7")};
  border-radius: 1px;
  box-shadow: none;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 14px;
  height: 34px;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;

  :focus {
    border-color: #1ab394;
    outline: none;
  }
`;

export default Select;
