import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  0% {
    opacity: 0;
  }
100% {
    opacity: 1;
}
`;

export const TableWrapper = styled.div`
  animation: ${showIn} 500ms linear;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    border-radius: 10px;
    overflow: auto;
    height: 190px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    overflow: hidden;
    height: auto;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 10px;

  background-color: rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
`;

export const TableHeadRows = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const TableHead = styled.thead`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: var(--font-light);
  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
export const TableHeaderCell = styled.th`
  font-family: OpenSans;

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--font-dark);

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const TableBody = styled.tbody``;

export const TableNextRows = styled.tr`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

export const TableCell = styled.td`
  font-family: OpenSans;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--font-light);
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    font-weight: 300;
    font-size: 16px;
  }
`;
