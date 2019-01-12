import styled from "styled-components";

import { mediaQueries } from "../../../styles/mediaQueries";

const JobOfferDetails = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  min-width: 280px;

  ${mediaQueries.mobile`
    margin-left: 0;
  `}
`;

JobOfferDetails.displayName = "JobOfferDetails";

export default JobOfferDetails;
