import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;

  &:hover {
    background-color: var(--brand-logout);
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
