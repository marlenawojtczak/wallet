import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/wallet.svg";

const rotateAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const RotatingLogoIcon = styled(LogoIcon)`
  animation: ${rotateAnimation} 3000ms cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
`;

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
  font-size: 30px;
`;

/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
