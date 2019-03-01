import styled from "styled-components";

const Salary = styled.p`
  color: ${({ theme }) => theme.color.text.money};
  font-size: ${({ theme }) => theme.font.size.heading.secondary};
  margin: 0;
`;

export default Salary;
