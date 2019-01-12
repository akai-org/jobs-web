import styled from "styled-components";

import OfferType from "../../consts/OfferType";

const VerticalBar = styled.div`
  background: ${({ type }) => OfferType[type].barColor || "white"};
  width: 5px;
  height: 100%;
  position: absolute;
`;

VerticalBar.displayName = "VerticalBar";

export default VerticalBar;
