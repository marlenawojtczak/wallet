import styled, { keyframes } from "styled-components";

const fadeInLogo = keyframes`
  0% {
    opacity: 0;
        transform: scale(0.95);
  }
   50% {
    opacity: 0;
        transform: scale(0.95);
  }
  100% {
    opacity: 1;
     transform: scale(1);
  }
`;

const fadeInText = keyframes`
  0% {
    opacity: 0;
        transform: scale(0.95);
  }
  100% {
    opacity: 1;
     transform: scale(1);
  }
`;

const fadeInInfo = keyframes`
  0% {
    opacity: 0;
        transform: scale(0.95);
  }
    60% {
    opacity: 0;
        transform: scale(0.95);
  }
  100% {
    opacity: 1;
     transform: scale(1);
  }
`;

const fadeUp = keyframes`
  0% {
 transform: translateY(1000%);
  }
   80% {
 transform: translateY(1000%);
  }
 100% {
 transform: translateY(0);
  }
`;

const fadeWrapper = keyframes`
  0% {
    opacity: 0;
}
    20% {
    opacity: 0;
}
 100% {
  opacity: 1;
}
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
//   overflow: hidden;
//   position: relative;
//   height: 100vh;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     height: 100vh;
//     padding: 60px 118px;
//     background-color: var(--bg-accent);
//     background-image: url(${backgroundElipsePink}), url(${backgroundElipseBlue});
//     background-repeat: no-repeat, no-repeat;
//     background-position: right -25vw top, left bottom;
//   }
//   @media screen and (min-width: 1280px) {
//     padding: 0;
//     justify-content: center;
//     background-position: right top, left bottom;
//  }

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SpanLogo = styled.div`
  font-family: OpenSans;
  font-size: 60px;
  font-weight: 300;
  color: var(--bg-light);
  text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
    3px 0px 0 grey, 4px 0px 0 grey, 5px -1px 0 grey, 13px 7px 10px black;
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  gap: 12px;
  animation: ${fadeInLogo} 900ms ease-in;
  svg {
    width: 60px;
  }
  @media screen and (min-width: 768px) {
    gap: 15px;
    svg {
      width: 70px;
    }
  }
`;

export const SpanText = styled.div`
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  color: var(--bg-light);
  text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
    3px 0px 0 grey, 13px 7px 10px black;
  padding-top: 100px;
  margin-bottom: 20px;
  animation: ${fadeInText} 500ms ease-in;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;
export const SpanInfo = styled.div`
  font-family: OpenSans;
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: center;
  color: var(--bg-light);
  text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 13px 7px 10px black;
  animation: ${fadeInInfo} 1300ms ease-in;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation: ${fadeWrapper} 400ms ease-out;
  background-color: white;

  // mirror effect + component RegisterForm or LoginForm
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    top: 25%;
    background-color: transparent;
  }
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const ButtonLogin = styled.button`
  @media screen and (min-width: 768px) {
    position: fixed;

    display: flex;
    justify-content: center;
    text-align: center;
    bottom: 40%;
    border-radius: 10px;
    border: none;
    padding: 10px 40px;
    backdrop-filter: blur(70px);
    color: var(--font-light);
    font-family: OpenSans;
    letter-spacing: 10px;
    font-size: 30px;
    font-weight: 300;
    line-height: normal;

    background-color: transparent;
    text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 6px 1px 10px black;
    animation: ${fadeUp} 1.5s ease-in;
    cursor: pointer;
    box-shadow: 15px 0 20px 20px rgba(0, 0, 0, 0.5),
      5px 0 15px 15px rgba(0, 0, 0, 0.4), 2px 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const FotterPositionBig = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  @media screen and (min-width: 768px) {
    position: fixed;
    width: auto;
  }
`;

export const FotterPosition = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`;
