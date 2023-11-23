import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  position: sticky;
  bottom: 2%;
  padding: 20px;
  z-index: 999;

  @media screen and (min-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 4%;
    right: 50px;
    padding: 0;
    z-index: 999;
  }
  @media screen and (min-width: 1280px) {
    right: 5%;
    padding: 0;
  }
`;

export const BalanceNav = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;
