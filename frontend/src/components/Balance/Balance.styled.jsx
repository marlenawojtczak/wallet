import styled from "styled-components";

// export const Wrapper = styled.div`
//   @media screen and (max-width: 768px) {
//     height: 80px;
//     margin: 128px 20px 0;
//     border-radius: 30px;
//     border: 2px solid black;
//   }
//   @media screen and (min-width: 769px) and (max-width: 1279px) {
//     height: 80px;
//     border: 2px solid orange;
//     border-radius: 30px;
//     margin: 0 32px;
//   }
//   @media screen and (min-width: 1280px) {
//     height: 80px;
//     border: 2px solid blue;
//     margin: 214px 0 32px 16px;
//   }
// `;

export const BalanceElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 32px;
  border-radius: 30px;
  height: 80px;
  margin: 12px 20px 32px 20px;

  background-color: var(--bg-light);
  /* background-color: orange; */

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 28px 32px 20px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    margin: 28px 69px 32px 16px;
  }
`;
export const BalanceHeader = styled.p`
  text-transform: uppercase;
  font-family: "Circe";
  font-size: 12px;
  font-weight: 400;
  color: var(--font-grey);
  line-height: 13px;
`;
export const BalanceContent = styled.p`
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 700;
  color: var(--font-dark);
  line-height: 36px;
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
