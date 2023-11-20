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
    background: linear-gradient(to right, #0370a7, #02527a, #0075ce);
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animloader} 900ms linear infinite;
  }
`;
