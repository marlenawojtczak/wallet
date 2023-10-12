import styled from "styled-components";

export const DiagramTable = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    width: 100%;
  }
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
