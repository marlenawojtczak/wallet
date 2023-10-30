import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 15px 0 15px;
  background-color: var(--bg-light);

  @media screen and (min-width: 768px) {
    padding: 20px 0 20px;
  }
  @media screen and (min-width: 2500px) {
    border-radius: 30px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
