import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  0% {
    opacity: 0;
  }
100% {
    opacity: 1;
}
`;

export const BalanceElement = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--bg-light);
  animation: ${showIn} 500ms linear;
  padding: 8px 0 6px 32px;
  margin-bottom: 45px;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const BalanceHeader = styled.p`
  font-family: OpenSans;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--font-grey);
  @media screen and (min-width: 768px) {
    font-size: 12px;
    padding-top: 4px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 12px;
    padding-top: 0;
  }
`;
export const Cash = styled.span`
  font-family: OpenSans;
  font-size: 22px;
  font-weight: 400;
  color: var(--font-dark);
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const BalanceContent = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: OpenSans;
  font-size: 22px;
  font-weight: 700;
  color: var(--font-dark);
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
