import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const rotateMobile = keyframes`
  0% {
    transform: rotate(0deg) scale(0.6);
  }
  25% {
    transform: rotate(10deg) scale(0.6);
  }
  50% {
    transform: rotate(0deg) scale(0.8);
  }
  75% {
    transform: rotate(-10deg) scale(0.6);
  }
  100% {
    transform: rotate(0deg) scale(0.6);}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 32px;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--font-dark);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 10px;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    &:hover svg {
      animation: ${rotateMobile} 500ms linear infinite;
    }
    svg {
      transform: scale(0.6) translateX(-34%);
    }
  }

  /* &:hover svg path#Vector {
    fill: var(--brand-primary);
    cursor: pointer;
  } */

  &.active {
    font-weight: 700;
    svg path#Vector {
      fill: var(--brand-primary);
    }
  }
  &.active {
    svg {
      border-radius: 8px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const NavName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;

    &:hover {
      font-weight: 700;
    }
  }
`;

export const ListElementCurrency = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
