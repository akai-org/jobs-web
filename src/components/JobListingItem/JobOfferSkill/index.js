import styled from "styled-components";

const JobOfferSkill = styled.div`
  border: 1px solid;
  color: grey;
  border-radius: 40px;
  padding: 5px 10px;
  margin-right: 25px;
  width: 80px;
  text-align: center;

  ${({ theme }) => theme.media.mobile`
    font-size: 12px;
  `}
`;

JobOfferSkill.displayName = "JobOfferSkill";

export default JobOfferSkill;
