import styled from "styled-components";

export const StyledChart = styled.div`
  width: 280px;
  margin: auto;
  position: relative;
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
`;
/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
