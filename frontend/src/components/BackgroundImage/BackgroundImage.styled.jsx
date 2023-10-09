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

export const BackgroundContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-accent);
    height: 100vh;
    position: relative;
    padding: 60px 118px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0;
    justify-content: center;
  }
`;

export const BackgroundElipseBlue = styled.div`
  background-image: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${backgroundElipseBlue});
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;

export const BackgroundElipsePink = styled.div`
  background-image: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${backgroundElipsePink});
    background-repeat: no-repeat;
    background-position: right -80% top;
  }
  @media screen and (min-width: 1280px) {
    background-position: right -10% top;
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
    background-color: var(--bg-accent-modified);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  }
`;
