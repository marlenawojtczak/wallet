import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 2%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 4%;
    right: 50px;
    padding: 0;
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
