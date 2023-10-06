import styled from "styled-components";

export const DiagramTable = styled.div`
  background-color: var(--bg-accent);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 32px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 16px 0 69px;
  }
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
