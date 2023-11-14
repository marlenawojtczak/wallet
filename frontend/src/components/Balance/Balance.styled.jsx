import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  0% {
    opacity: 0;
  }
100% {
    opacity: 1;
}
`;

export const BalanceElement = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--bg-light);
  animation: ${showIn} 500ms linear;
  padding: 8px 0 6px 32px;

  @media screen and (min-width: 767px) {
    width: 100%;
  }
`;

export const BalanceHeader = styled.p`
  font-family: OpenSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--font-grey);
`;
export const Cash = styled.span`
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 400;
  color: var(--font-dark);
`;

export const BalanceContent = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 700;
  color: var(--font-dark);
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  width: 336px;
  height: 80px;
  border: 2px solid orange;
  border-radius: 30px;
  margin: 0 32px;
  text-align: center
}
@media screen and (min-width: 1280px) {
  height: 80px;
  border: 2px solid blue;
  margin: 214px 0 32px 16px;
`; */
