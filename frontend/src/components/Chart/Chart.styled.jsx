import styled from "styled-components";

export const StyledChart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperDonat = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 336px;
  }
`;

export const InsideText = styled.p`
  color: var(--font-light);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: OpenSans;
  font-size: 20px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    top: 41%;
  }
`;

export const ChartHeader = styled.p`
  text-align: center;
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 8px;
  letter-spacing: 1px;
  color: var(--font-dark);
  text-shadow: 1px 1px 0 var(--font-dark), 2px 1px 0 var(--font-dark),
    10px 2px 15px black;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 20px;
    display: none;
  }
`;
/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
