import styled, { keyframes } from "styled-components";
import img from "../../assets/images/mountains.png";

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

  @media screen and (min-width: 768px) {
    overflow: auto;
    height: 190px;
    border-radius: 10px;
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
`;

export const TableHead = styled.thead`
  display: flex;
  padding: 10px 0;
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
  text-align: center;
  flex: 1;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--font-dark);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-weight: 700;
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 15px 0;
`;

export const TableNextRows = styled.tr`
  display: flex;
`;

export const TableCell = styled.tr`
  flex: 1;
  font-family: OpenSans;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--font-light);
  @media screen and (min-width: 768px) {
    font-size: 17px;
    font-weight: 400;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 300;
  }
`;
