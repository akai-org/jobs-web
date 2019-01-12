import styled from "styled-components";

const JobOfferDetails = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  min-width: 280px;

  ${({ theme }) => theme.media.mobile`
    margin-left: 0;
  `}
`;

JobOfferDetails.displayName = "JobOfferDetails";

export default JobOfferDetails;
