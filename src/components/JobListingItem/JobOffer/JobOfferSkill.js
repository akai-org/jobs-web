import styled from "styled-components";

import { mediaQueries } from "../../../styles/mediaQueries";

const JobOfferSkill = styled.div`
  border: 1px solid;
  color: grey;
  border-radius: 40px;
  padding: 5px 10px;
  margin-right: 25px;
  width: 80px;
  text-align: center;

  ${mediaQueries.mobile`
    font-size: 12px;
  `}
`;

JobOfferSkill.displayName = "JobOfferSkill";

export default JobOfferSkill;
