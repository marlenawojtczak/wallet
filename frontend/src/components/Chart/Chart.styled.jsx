import styled from "styled-components";

export const StyledChart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
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
  color: var(--font-dark);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: "Circe";
  font-size: 18px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    top: 42%;
  }
`;

export const ChartHeader = styled.p`
  text-align: left;
  font-family: "Poppins";
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;
  color: var(--font-dark);

  @media screen and (min-width: 768px) {
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
