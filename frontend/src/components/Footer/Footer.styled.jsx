import styled from "styled-components";

export const FooterBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: none;
  transform: translateY(50%);
  transition: transform 250ms ease-in-out;
  z-index: 2;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: translateY(0);
  }
`;

export const TeamName = styled.span`
  font-weight: bold;

  &:hover {
    color: var(--linked-in);
  }
`;
