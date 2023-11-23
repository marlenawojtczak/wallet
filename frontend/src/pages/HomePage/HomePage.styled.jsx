import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

// export const ButtonWrapperMobile = styled.div`
//   position: sticky;
//   z-index: 9999;
//   bottom: 30px;
//   display: flex;
//   justify-content: center;
// `;

export const ButtonWrapperMobile = styled.div`
  display: none;
`;

export const ButtonWrapper = styled.div`
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
