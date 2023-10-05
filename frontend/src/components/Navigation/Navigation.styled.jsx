import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: var(--bg-accent);
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    padding: 40px 0 28px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 0 0 0 32px;
    gap: 12px;
    max-width: 150px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--font-dark);

  &:hover svg path#Vector {
    fill: var(--brand-primary);
    cursor: pointer;
  }

  &.active {
    font-weight: 700;
    svg path#Vector {
      fill: var(--brand-primary);
    }
  }
`;

export const NavName = styled.p`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-left: 20px;
    font-size: 18px;
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
