import styled from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--brand-secondary);
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    background-color: var(--brand-logout);
  }
`;
