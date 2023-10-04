import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 15px 0 15px;

  @media screen and (min-width: 768px) {
    padding: 20px 0 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 480px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1200px;
  }
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
