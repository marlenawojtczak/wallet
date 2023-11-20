// import styled, { css, keyframes } from "styled-components";

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//         transform: scale(0.95);
//   }
//   100% {
//     opacity: 1;
//      transform: scale(1);
//   }
// `;

// const showIn = keyframes`
//   0% {
//  transform: scale(0.8);
//   }
//   100% {
// transform: scale(1.02);
//   }
// `;

// export const StyledWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 107px 20px;
//   animation: ${fadeIn} 500ms ease-in;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     justify-content: center;
//     width: 100%;
//     max-width: 533px;
//     border-radius: 20px;
//     background-color: var(--font-light);
//     margin: 0;
//   }
// `;
// export const StyledForm = styled.div`
//   width: 100%;

//   @media screen and (min-width: 768px) {
//     margin: 40px 60px;
//   }
// `;
// export const StyledLogoMobile = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 52px;
//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;
// export const StyledLogo = styled(StyledLogoMobile)`
//   display: none;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 60px;
//   }
// `;
// export const StyledInputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   border-bottom: 1px solid var(--switch-main);
//   margin-bottom: 40px;
// `;

// export const StyledInput = styled.input`
//   border: none;
//   width: 100%;
//   outline: none;
//   color: var(--brand-logout);
//   font-family: Circe;
//   font-size: 18px;
//   font-weight: 400;
//   line-height: normal;
//   padding-bottom: 3px;
// `;
// export const StyledIcon = styled.div`
//   padding-left: 10px;
// `;
// export const StyledButtons = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   height: 140px;
//   @media screen and (min-width: 768px) {
//     margin-top: 2px;
//   }
// `;

// export const StyledButton = styled.div`
//   width: 100%;
//   text-align: center;
//   font-family: Circe;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: 1.8px;
//   text-transform: uppercase;
//   border: 1px solid var(--brand-primary);
//   border-radius: 20px;
//   padding: 13px 0;
//   color: var(--brand-primary);
//   background-color: var(--font-light);
//   transition: all 150ms ease;
//   cursor: pointer;
//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--bg-btn-focus);
//       border: none;
//       color: white;
//     `};

//   &:hover,
//   &:focus {
//     border: none;
//     color: var(--font-light);
//     background: var(--bg-btn-focus);

//     box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 4px, rgba(0, 0, 0, 0.3) 3px 3px 4px,
//       rgba(0, 0, 0, 0.2) -5px -4px 0px inset;
//     transform: scale(1.005);
//   }

//   @media screen and (min-width: 768px) {
//     width: 300px;
//   }
// `;
// export const StyledButtonIcon = styled.div`
//   background-color: white;
//   padding-right: 10px;
//   cursor: pointer;
//   &:hover,
//   &:focus {
//     border: none;
//     animation: ${showIn} 400ms ease-in;
//   }
// `;

/* import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
        transform: scale(0.95);
  }
  100% {
    opacity: 1;
     transform: scale(1);
  }
`;
const infoIn = keyframes`
  0% {
    opacity: 0;
        transform: translateX(40%);
  }
    60% {
    opacity: 0;
}
  100% {
    opacity: 1;
 transform: translateX(0);
  }
`;

const formIn = keyframes`
  0% {
  transform: translateX(-250%);
  }
  100% {
transform: translateX(0);
  }
`;
const showIn = keyframes`
  0% {
 transform: scale(0.8);
  }
  100% {
transform: scale(1.02);
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
`;

export const StyledInfo = styled.div`
  flex: 73%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  animation: ${infoIn} 800ms ease-out;
`;

export const SpanLogin = styled.p`
  color: var(--font-dark);
  font-family: Circe;
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-bottom: 60px;
`;

export const StyledForm = styled.div`
  @media screen and (min-width: 768px) {
    flex: 22%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
    background-color: var(--bg-light);
    box-shadow: -15px 0 20px 20px rgba(0, 0, 0, 0.5),
      -5px 0 15px 15px rgba(0, 0, 0, 0.4), -2px 0 10px 10px rgba(0, 0, 0, 0.2);
    animation: ${formIn} 800ms ease-out;
  }
`;

export const StyledLogoMobile = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  @media screen and (min-width: 768px) {
  }
`;

export const SpanLogo = styled.p`
  color: var(--bg-light);
  font-family: Circe;
  font-size: 130px;
  font-weight: 700;
  text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
    3px 0px 0 grey, 4px 0px 0 grey, 5px -1px 0 grey, 6px -1px 0 grey,
    13px 7px 10px black;
  text-align: center;
  margin: 0px 0 70px 0;
`;
export const SpanText = styled(SpanLogo)`
  font-size: 70px;
  font-weight: 200;
  line-height: 1.1;
  text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
    3px 0px 0 grey, 4px 0px 0 grey, 5px -1px 0 grey, 13px 7px 10px black;
`;

export const SpanInfo = styled(SpanLogo)`
  font-size: 30px;
  font-weight: 200;
  margin: 0 0 60px 0;
  text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 13px 7px 10px black;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--switch-main);

  margin-bottom: 50px;
`;

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  color: var(--font-dark);
  font-family: Circe;
  font-size: 25px;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 5px;
`;
export const StyledIcon = styled.div`
  padding-left: 10px;
`;
export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

export const StyledButtonR = styled.div`
  font-family: Circe;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border: 2px solid var(--bg-light);
  border-radius: 10px;
  padding: 10px 35px;
  margin-bottom: 50px;
  color: var(--bg-light);
  backdrop-filter: blur(5px);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    backdrop-filter: blur(70px);
    letter-spacing: 3px;
  }
`;

export const StyledButton = styled.div`
  font-family: Circe;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border: 2px solid var(--brand-logout);
  border-radius: 10px;
  padding: 10px 35px;
  margin: 30px 0 50px 0;
  color: var(--brand-logout);
  backdrop-filter: blur(5px);
  transition: all 150ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    backdrop-filter: blur(70px);
    letter-spacing: 3px;
    color: var(--font-dark);
    border: 2px solid var(--font-dark);
  }
`;
export const StyledButtonIcon = styled.div`
  background-color: white;
  padding-right: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    border: none;
    animation: ${showIn} 400ms ease-in;
  }
`; */

import styled, { keyframes } from "styled-components";

const infoIn = keyframes`
  0% {
    opacity: 0;
        transform: translateX(-40%);
  }
    60% {
    opacity: 0;
       
  }
  100% {
    opacity: 1;
 transform: translateX(0);
  }
`;

const formIn = keyframes`
  0% {
      transform: translateX(-250%);
  }
 100% {
 transform: translateX(0);
  }
`;

const showIn = keyframes`
  0% {
 transform: scale(0.8);
  }
  100% {
transform: scale(1.02);
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

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  animation: ${fadeWrapper} 400ms ease-out;
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 100%;
    animation: none;
    border-radius: 10px;
    // mirror effect + component AccessLayout
    /* box-shadow: 15px 0 20px 20px rgba(0, 0, 0, 0.5),
      5px 0 15px 15px rgba(0, 0, 0, 0.4), 2px 0 10px 10px rgba(0, 0, 0, 0.2); */
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    border-radius: 0;
    height: 100vh;
  }
`;

export const StyledForm = styled.div`
  padding: 20px 20px;
  background-color: var(--bg-light);
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    border-radius: 8px;
  }
  @media screen and (min-width: 1280px) {
    flex: 22%;
    margin: 0;
    padding: 0 30px;
    border-radius: 0px;
    backdrop-filter: blur(5px);
    background: linear-gradient(
      to right,

      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 1)
    );

    animation: ${formIn} 800ms ease-out;
  }
`;

export const StyledInfo = styled.div`
  @media screen and (min-width: 1280px) {
    flex: 73%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    animation: ${infoIn} 800ms ease-out;
  }
`;

export const SpanLogin = styled.p`
  color: var(--font-dark);
  font-family: OpenSans;
  font-size: 35px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 1px 1px 0 var(--font-dark), 2px 1px 0 var(--font-dark),
    3px 0px 0 grey, 10px 2px 15px black;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    margin: 10px 0 40px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 60px 0;
  }
`;

export const LogoWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
    gap: 20px;
  }
`;

export const SpanLogo = styled.p`
  @media screen and (min-width: 1280px) {
    color: var(--bg-light);
    font-family: OpenSans;
    font-size: 100px;
    font-weight: 600;
    text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
      3px 0px 0 grey, 4px 0px 0 grey, 5px -1px 0 grey, 6px -1px 0 grey,
      13px 7px 10px black;
  }
`;
export const SpanText = styled(SpanLogo)`
  @media screen and (min-width: 1280px) {
    font-size: 60px;
    font-weight: 300;
    letter-spacing: 2px;
    text-shadow: 1px 1px 0 var(--bg-light), 2px 1px 0 var(--bg-light),
      3px 0px 0 grey, 4px 0px 0 grey, 5px -1px 0 grey, 13px 7px 10px black;
    margin-bottom: 50px;
  }
`;

export const SpanInfo = styled(SpanLogo)`
  @media screen and (min-width: 1280px) {
    font-size: 30px;
    font-weight: 300;
    margin: 0 0 80px 0;
    letter-spacing: 1px;
    text-shadow: 1px 1px 0 var(--bg-light), 3px 0px 0 grey, 13px 7px 10px black;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  box-shadow: inset 2px 1px 4px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin-bottom: 20px;
  color: transparent !important;
  svg path {
    stroke: var(--brand-logout);
    fill: transparent;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1280px) {
    box-shadow: inset 3px 1px 10px rgba(0, 0, 0, 0.5);
    gap: 10px;
    svg path {
      stroke: rgb(71, 56, 56);
    }
  }
`;

export const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: transparent;
  color: var(--font-dark);
  font-family: OpenSans;
  font-weight: 500;
  line-height: normal;
  font-size: 20px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
    padding: 8px 0px;
  }
`;
export const StyledIcon = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1280px) {
  }
`;

export const Span = styled.div`
  font-family: OpenSans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  padding: 15px 0;
`;
export const StyledButtons = styled.div`
  margin: 30px 0 40px;
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const StyledButtonMobileLogin = styled.div`
  border: none;
  box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 20px;
  font-family: OpenSans;
  font-weight: 500;
  font-size: 20px;
`;
export const StyledButtonR = styled.div`
  font-family: OpenSans;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 2px solid var(--bg-light);
  border-radius: 10px;
  padding: 5px 35px;
  margin-bottom: 50px;
  color: var(--bg-light);
  backdrop-filter: blur(5px);
  transition: all 150ms ease;
  cursor: pointer;
  &:hover,
  &:focus {
    backdrop-filter: blur(70px);
    letter-spacing: 3px;
  }
`;

export const StyledButton = styled.div`
  border: none;
  box-shadow: 4px 3px 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  font-size: 20px;
  font-family: OpenSans;
  font-weight: 600;
  font-size: 20px;
  background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    border: 1px solid var(--font-dark);
    color: var(--font-dark);
    background: transparent;
    font-size: 25px;
    padding-bottom: 5px;
    border-radius: 10px;
    padding: 7px 35px;
    margin: 0px 0 50px 0;
    box-shadow: none;

    &:hover,
    &:focus {
      letter-spacing: 3px;
    }
  }

  /* @media screen and (min-width: 1280px) {
    font-size: 25px;
    padding-bottom: 5px;
    border-radius: 10px;
    padding: 7px 35px;
    margin: 0px 0 50px 0;
    color: var(--brand-logout);
    transition: all 150ms ease;
    cursor: pointer;
    &:hover,
    &:focus {
      box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.6);
      letter-spacing: 3px;
      background: linear-gradient(to right, #00aaff, #0d91d3, #058bf1);
    }
  } */
`;
export const StyledButtonIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 0 3px;

  @media screen and (min-width: 1280px) {
    padding-right: 10px;
    cursor: pointer;

    &:hover,
    &:focus {
      border: none;
      animation: ${showIn} 400ms ease-in;
    }
  }
`;
export const FooterWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`;
