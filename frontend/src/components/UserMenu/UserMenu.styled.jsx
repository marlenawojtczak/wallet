import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  color: var(--brand-logout);
  font-family: "Circe";
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 0;
  color: var(--brand-logout);
  &:hover {
    color: var(--brand-accent);
    cursor: pointer;
  }
  &:hover svg path#Vector {
    fill: var(--brand-accent);
  }
  font-family: "Circe";
  font-size: 18px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
    border-left: 1px solid var(--brand-logout);
    padding-left: 12px;
  }
`;

export const ButtonText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
