import styled from "styled-components";

export const DiagramTable = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

export const WrapperDonat = styled.div`
  flex: 1;
`;

export const WrapperTable = styled.div`
  flex: 1;
  @media screen and (min-width: 1280px) {
  }
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
