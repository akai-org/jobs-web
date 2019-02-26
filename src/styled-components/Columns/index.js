import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  margin: -30px;

  ${({ theme }) => theme.media.tablet`
    flex-wrap: wrap;
    margin: -20px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin: -20px 0;
  `};
`;

export const Column = styled.div`
  flex: 1;
  padding: 30px;

  ${({ theme }) => theme.media.tablet`
    flex: initial;
    flex-basis: 100%;
    padding: 20px;
  `}

  ${({ theme }) => theme.media.mobile`
    padding: 20px 0;
  `};
`;
