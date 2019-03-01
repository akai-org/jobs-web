import styled from "styled-components";
import { Button } from "../Buttons";
import backIcon from "../../assets/images/back.svg";

const BackButton = styled(Button)`
  padding-left: 2.2rem;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    background-image: url(${backIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 11px;
    height: 8px;
  }
`;

export default BackButton;
