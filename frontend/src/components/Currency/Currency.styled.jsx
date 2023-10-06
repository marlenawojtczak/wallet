import styled from "styled-components";

export const CurrencyStyle = styled.div`
@media screen and (max-width: 768px) {
height: 80px;
margin: 12px 20px 0;
border-radius: 30px;
border: 2px solid black;
text-align: center

}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  width: 336px;
  height: 182px;
  border-radius: 30px;
  background: #4A56E2;
  text-align: center;
  position: absolute;
  top: 112px;
  right: 32px;
  
 
}
@media screen and (min-width: 1280px) {
  width: 393px;
  height: 331px;
  border: 2px solid blue;
  border-radius: 30px;
  background: #4A56E2;
 margin: 32px 0 63px 16px;
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
