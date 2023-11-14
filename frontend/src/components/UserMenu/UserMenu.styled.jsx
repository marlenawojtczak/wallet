import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  color: var(--font-dark);
  font-family: OpenSans;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 20px;
  text-shadow: 1px 1px 0 var(--font-dark), 2px 1px 0 var(--font-dark),
    3px 0px 0 grey, 10px 2px 15px black;
  border-right: 2px solid var(--font-dark);

  padding-right: 12px;
`;

export const Button = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 0 0 0 3px;

  color: var(--font-dark);
  svg path {
    fill: var(--font-dark);
  }
  &:hover {
    color: var(--brand-accent);
    cursor: pointer;
    transform: scale(1.1);
  }
  &:hover svg path#Vector {
    fill: var(--brand-accent);
  }
  font-family: OpenSans;
  font-size: 20px;
  font-weight: 500;

  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 6px;
  }
`;

export const ButtonText = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
