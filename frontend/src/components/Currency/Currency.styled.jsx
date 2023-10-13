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
  height: 100vh;
  animation: ${showIn} 500ms linear;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: auto;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  margin-top: 10px;
  background-color: var(--nav-inactive);
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
  }
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableHead = styled.thead`
  display: flex;
  padding: 12px 20px;
  justify-content: space-between;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--font-light);
  border-radius: 30px 30px 0 0;
  background-color: rgba(255, 255, 255, 0.2);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 20px 52px;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--font-light);

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TableNextRows = styled.tr`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
