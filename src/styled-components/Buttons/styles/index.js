import { css } from "styled-components";

const Base = css`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  border: none;
  font-family: ${({ theme }) => theme.font.family.base};
  font-weight: 400;
  border-radius: 100px;
  background: transparent;
  font-size: ${({ theme }) => theme.font.size.label.base};
  line-height: ${({ theme }) => theme.font.lineHeight.label};
  color: ${({ theme }) => theme.color.text.base};
  max-width: 12em;
  min-width: 6em;
  padding: 0.75rem 2rem;
  transition: opacity ${({ theme }) => theme.effects.transition.quick};
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: ${({ theme }) => theme.effects.hover.opacity};
  }

  ${({ theme }) => theme.media.mobile`
    font-size: ${theme.font.size.label.secondary};
  `};

  ${({ small, theme }) =>
    small &&
    css`
      max-width: 20em;
      min-width: 8em;
      padding: 0.5rem 1.5rem;
      font-size: ${theme.font.size.label.secondary};

      ${theme.media.mobile`
      font-size: ${theme.font.size.label.tertiary};
    `};
    `}

  ${({ large, theme }) =>
    large &&
    css`
      max-width: 20em;
      min-width: 8em;
      padding: 1rem 2.5rem;

      ${theme.media.mobile`
      font-size: ${theme.font.size.label.secondary};
      padding: ${props => (props.primary ? "1rem 2rem" : "0.75rem 2rem")};
    `};
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      max-width: none;
      min-width: none;
      width: 100%;
    `}
`;

export default Base;
