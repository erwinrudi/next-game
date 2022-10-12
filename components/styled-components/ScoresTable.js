import styled from "styled-components"

export const Table = styled.table`
  width: 100%;
  height: 100%;
`

export const ScoreRow = styled.tr`
  font-family: Montserrat;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.05em;
  line-height: clamp(2rem, 2.5vw, 3rem);
  &:first-of-type {
    font-weight: 700;
  }
  & > *:nth-child(3) {
    @media (max-width: 350px) {
      display: none;
    }
  }
`;

export const ScoreColumn = styled.td`
  text-align: center;
  & span {
    font-weight: 700;
  }
`;