import styled, { keyframes } from "styled-components";
import backgroundElipseBlue from "../../assets/images/ellipseBlue.png";
import backgroundElipsePink from "../../assets/images/ellipsePink.png";

const showIn = keyframes`
  0% {
    opacity: 0;
z-index:0;

  }
    80% {
    opacity: 0;
 z-index: 1;
  }
  100% {
    opacity: 1;
  z-index: 1;
  }
`;

const showBack = keyframes`
  0% {
  opacity: 1;
 z-index: 1;
  }
    80% {
 opacity: 1;
 z-index: 1;
  }
  100% {
     opacity: 0;
 z-index: 0;
 display: none;
 }
`;

const fadeIn = keyframes`
  0% {
    transform: translateX(300%);
    opacity: 0;
  }
100% {
 opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeInPc = keyframes`
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
100% {
 opacity: 1;
    transform: translateX(20%);
  }
`;

export const ManWithBasket = styled.img`
  @media screen and (min-width: 768px) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    position: absolute;
    top: 12%;
    left: 30%;
    width: 20%;
  }
  @media screen and (min-width: 1280px) {
    animation: ${fadeInPc} 1s ease-in-out forwards;
    top: 31%;
    left: 14vw;
    width: 13vw;
  }
`;

export const WomanWithMobile = styled.img`
  @media screen and (min-width: 768px) {
    opacity: 0;
    animation: ${fadeIn} 1s ease-in-out forwards;
    position: absolute;
    top: 12%;
    left: 38%;
    width: 10%;
  }
  @media screen and (min-width: 1280px) {
    animation: ${fadeInPc} 1s ease-in-out forwards;
    top: 30%;
    left: 22vw;
    width: 7vw;
  }
`;

export const BackgroundContainer = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 60px 118px;
    background-color: var(--bg-accent);
    background-image: url(${backgroundElipsePink}), url(${backgroundElipseBlue});
    background-repeat: no-repeat, no-repeat;
    background-position: right -25vw top, left bottom;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
    justify-content: center;
    background-position: right top, left bottom;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    z-index: 1;
    animation: none;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 0;
  }
`;

export const LogoWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    flex: 1;
  }
`;
export const PhotoWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 50%;
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
    width: 100%;
  }
`;
export const Photo = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Info = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    color: var(--font-dark);
    font-family: Poppins;
    font-size: 30px;
    font-weight: 400;
    line-height: normal;
  }
`;

export const MobileLogo = styled.div`
  display: flex;
  justify-content: center;
  height: 100vw;
  animation: ${showBack} 2s ease-out forwards;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: flex;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  animation: ${showIn} 2.5s linear forwards;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    animation: none;
  }
  @media screen and (min-width: 1280px) {
    height: 100vh;
    flex: 1.4;
    align-items: center;
    backdrop-filter: blur(40px);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  }
`;
