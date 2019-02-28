import styled, { css } from "styled-components";

export const Column = styled.div`
  flex: 1;
  padding: 30px;

  ${({ theme }) => theme.media.tablet`
    flex: initial;
    flex-basis: 100%;
    padding: 0 20px;
  `}

  ${({ theme }) => theme.media.mobile`
    padding: 0;
  `};
`;

export const MainColumn = styled(Column)`
  flex: 2;
`;

export const SideColumn = styled(Column)`
  flex: 1;
`;

export const ColumnContainer = styled.div`
  display: flex;
  margin: -30px;

  ${({ theme }) => theme.media.tablet`
    flex-wrap: wrap;
    margin: 0 -20px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin: 0;
  `};

  ${({ narrow }) =>
    narrow &&
    css`
      margin: -20px;

      ${Column} {
        padding: 20px;

        ${({ theme }) => theme.media.tablet`
        padding: 0 20px;
      `}

        ${({ theme }) => theme.media.mobile`
        padding: 0;
      `};
      }
    `};
`;
