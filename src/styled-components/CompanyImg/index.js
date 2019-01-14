import styled from "styled-components";

const CompanyImg = styled.img`
  height: ${({ theme }) => theme.size.img.thumbnail.height};
  margin: 0 15px;
  object-fit: contain;
  width: ${({ theme }) => theme.size.img.thumbnail.width};
`;

CompanyImg.displayName = "CompanyImg";

export default CompanyImg;
