import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";

const StyledSunIcon = styled(SunIcon)`
  fill: var(--brand-logout);
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledMoonIcon = styled(MoonIcon)`
  fill: var(--brand-logout);
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0;
`;

const Toggle = ({ theme, toggleTheme }) => (
  <Button onClick={toggleTheme}>
    {theme === "light" ? <StyledSunIcon /> : <StyledMoonIcon />}
  </Button>
);

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
