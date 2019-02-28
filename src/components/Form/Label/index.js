import styled from "styled-components";

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  color: ${({ theme }) => theme.color.text.base};
`;

const RequiredLabel = styled(Label)`
  ::after {
    color: #ed4337;
    content: "*";
  }
`;

export { Label, RequiredLabel };
