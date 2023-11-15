import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const rotateAnimation = keyframes`
  0% {
    transform: scale(1);
   
  }
  50% {
    transform: scale(0.97);
    filter: drop-shadow(1px 2px 6px  rgba(0, 0, 0, 0.5));
  }
  75% {
    transform: scale(1.03);
    filter: drop-shadow(4px 5px 10px  rgba(0, 0, 0, 0.5));
  }
  100% {
    transform: scale(1);
  
  }
`;

export const RotatingLogoIcon = styled.div`
  animation: ${rotateAnimation} 5s linear infinite;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LogoTitle = styled.span`
  color: var(--font-dark);
  font-family: OpenSans;
  font-weight: 500;
  font-size: 30px;
  text-shadow: 1px 1px 0 var(--font-dark), 2px 1px 0 var(--font-dark),
    3px 0px 0 grey, 10px 2px 15px black;
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
