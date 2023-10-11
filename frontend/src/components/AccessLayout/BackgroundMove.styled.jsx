import styled, { keyframes } from "styled-components";
import backgroundImage from "../../assets/images/FinanceApp.png";

const fadeIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
 opacity: 1;
    transform: translateX(20%);
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  background-color: var(--bg-accent);
  height: 100vh;
`;

export const LeftImage = styled.div`
  position: relative;
  flex: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 20px;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 60%;
  background: var(--bg-accent-modified);
`;

export const ManWithBasket = styled.img`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
  position: absolute;
  top: 33%;

  width: 270px; /* Ustaw stałą szerokość */
  height: 370px; /* Ustaw stałą wysokość */
`;

// flex in %

// export const LeftImage = styled.div`
//   @media screen and (min-width: 768px) {
//     flex: 30%;
//     max-height: 250px;
//     background-image: url(${backgroundImage});
//     background-repeat: no-repeat;
//     background-size: contain;
//   }
//   @media screen and (min-width: 1280px) {
//     /* flex: 40%;

//     background-image: url(${backgroundImage});
//     background-position: center;
//     background-repeat: no-repeat; */

//     flex: 40%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// export const RightContent = styled.div`
//   @media screen and (min-width: 768px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 1;
//     max-height: 750px;
//   }
//   @media screen and (min-width: 1280px) {
//     /* display: flex;
//     justify-content: center;
//     align-items: center;
//     flex: 60%;
//     /* background-image: url(${backgroundElipsePink}); */

//     background-position: center;
//     background-repeat: no-repeat;
//     background-position: right top;
//     width: 100%;
//     height: 100%;
//   }
// `;
