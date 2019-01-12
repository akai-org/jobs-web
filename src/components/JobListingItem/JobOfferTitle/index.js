import styled from "styled-components";

const JobOfferTitle = styled.h4`
  color: ${({ theme }) => theme.color.accent.primary};
  margin: 0 0 3px 0;
  text-decoration: none;
`;

JobOfferTitle.displayName = "JobOfferTitle";

export default JobOfferTitle;
