import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const LogoTitle = styled.span`
  color: var(--font-dark);
  font-family: "Poppins";
  font-weight: 700;
  font-size: 25px;
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
