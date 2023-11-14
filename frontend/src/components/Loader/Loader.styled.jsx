import styled, { keyframes } from "styled-components";

const animloader = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`;

export const LoaderContent = styled.div`
  width: 100%;
  height: 5px;
  display: inline-block;
  background: transparent;
  overflow: hidden;
  position: absolute;

  &::after {
    content: "";
    box-sizing: border-box;
    width: 192px;
    height: 5px;
    background: var(--brand-primary);
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animloader} 900ms linear infinite;
  }
`;

// const loaderspin = keyframes`
//   0% {
//     transform: translate(-50%, -50%) rotate(0deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotate(360deg);
//   }
// `;

// const loaderpulse = keyframes`
//   0% {
//     transform: scale(2.5);
//   }
//   100% {
//     transform: scale(2.5);
//   }
// `;

// export const LoaderContainer = styled.div`
//   /* background-color: var(--bg-modal-overlay); */
//   background-color: transparent;
//   height: 100%;
//   width: 100%;
//   position: fixed;
//   margin-top: 0px;
//   top: 0px;
//   z-index: 9999;
// `;

// export const LoaderContent = styled.div`
//   position: absolute;
//   content: "";
//   display: block;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 170px;
//   height: 170px;
//   border-top: 6px solid var(--brand-primary);
//   border-radius: 50%;
//   animation: ${loaderspin} 1.8s infinite ease-in-out;

//   &:before {
//     position: absolute;
//     content: "";
//     display: block;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 150px;
//     height: 150px;
//     border-top: 6px solid var(--brand-secondary);
//     border-radius: 50%;
//     animation: ${loaderspin} 1.8s infinite ease-in-out;
//   }
// `;

// export const LoaderIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
// `;

// export const LoaderImage = styled.div`
//   animation: ${loaderpulse} alternate 900ms infinite;
// `;
