import { css } from "styled-components";

export const breakpoints = {
  tablet: 1040,
  mobile: 640
};

export const mediaQueries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${breakpoints[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});