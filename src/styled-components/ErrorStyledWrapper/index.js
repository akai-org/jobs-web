import styled from "styled-components";

const ErrorStyledWrapper = styled.div`
  color: #ed4337;
  color: ${({ theme }) => theme.color.state.error};
  font-size: ${({ theme }) => theme.font.size.label.tertiary};
  margin-top: 3px;
`;

ErrorStyledWrapper.displayName = "ErrorStyledWrapper";

export default ErrorStyledWrapper;
