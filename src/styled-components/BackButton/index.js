import styled from "styled-components";
import backIcon from "../../assets/images/back.svg";

const BackButton = styled.a`
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.base};
  font-weight: normal;
  border: ${({ theme }) => theme.size.border.base} solid
    ${({ theme }) => theme.color.elements.border};
  border-radius: 100px;
  color: ${({ theme }) => theme.color.text.base};
  font-size: ${({ theme }) => theme.font.size.label.secondary};
  line-height: ${({ theme }) => theme.font.lineHeight.label};
  max-width: 12em;
  min-width: 6em;
  padding: 0.5rem 1.5rem 0.5rem 2.2rem;
  transition: opacity ${({ theme }) => theme.effects.transition.quick};
  text-align: center;
  text-decoration: none;
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

  &:hover {
    opacity: ${({ theme }) => theme.effects.hover.opacity};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.label.tertiary};
  `};
`;

export default BackButton;
