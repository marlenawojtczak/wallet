import styled from "styled-components";

export const StyledChart = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 336px;
    padding: 0;
    margin: 0 0 auto auto;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;

export const InsideText = styled.p`
  color: var(--font-dark);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: "Circe";
  font-size: 18px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    padding-top: 6px;
  }
`;

export const ChartHeader = styled.p`
  text-align: left;
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;
/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
