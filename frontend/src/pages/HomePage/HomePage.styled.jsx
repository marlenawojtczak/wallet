import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 2%;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 30px;
    justify-content: flex-end;
    bottom: 5%;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px;
    bottom: 0%;
  }
`;

export const BalanceNav = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
  }
`;
