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

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  background-color: #0d91d3;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  svg path {
    fill: var(--font-light);
  }

  &.active {
    font-weight: 800;
    font-size: 25px;
    background-color: #006597;
    svg path {
      fill: var(--font-light);
    }
  }
  &.active {
    svg {
      border-radius: 8px;
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    }
  }
  @media screen and (min-width: 768px) {
    text-decoration: none;
    color: var(--font-dark);
    font-family: OpenSans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: transparent;

    &:hover svg {
      animation: ${rotateMobile} 500ms linear infinite;
    }
    svg {
      transform: scale(0.8) translateX(-34%);
    }
    &.active {
      background-color: transparent;
    }
  }
`;

export const NavName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    &:hover {
      font-weight: 800;
      font-size: 25px;
    }
  }
`;

export const ListElementCurrency = styled.li`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
