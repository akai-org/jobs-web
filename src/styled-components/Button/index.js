import styled from "styled-components";

const Button = styled.button`
  background-image: none;
  background-color: #1ab394;
  border: 1px solid #1ab394;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 15px;
  padding: 6px 12px;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  vertical-align: middle;

  :hover {
    background-color: #18a689;
    border-color: #18a689;
    color: #ffffff;
    text-decoration: none;
  }
`;

export default Button;
