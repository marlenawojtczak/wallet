import styled from "styled-components";
import backgroundElipseBlue from "../../assets/images/ellipseBlue.png";
import backgroundElipsePink from "../../assets/images/ellipsePink.png";
import { useLocation } from "react-router-dom";

export const BackgroundContainer = styled.div`
  background-color: var(--bg-accent);
  height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundElipsePink}), url(${backgroundElipseBlue});
    background-repeat: no-repeat, no-repeat;
    background-position: right -25vw top, left bottom;
    height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    background-position: right top 80px, left bottom;
    position: relative;
  }

  ${(props) =>
    useLocation().pathname === "/home" &&
    `
    height: 100%;
  `}
`;

export const MaxWrapper = styled.div`
  @media screen and (min-width: 1500px) {
    margin: auto;
    max-width: 2500px;
  }
`;

export const Filter = styled.div`
  backdrop-filter: blur(40px);
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    margin: 0 20px;
    flex-direction: row;
  }
`;

export const WrapperNavBal = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
  @media screen and (min-width: 1280px) {
    flex: 0;
  }
`;

export const CurrencyNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
  }
  @media screen and (min-width: 1280px) {
    flex: 0;
  }
`;

export const WrapperLeftAndUpSite = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex: 30%;
    padding-top: 40px;
    margin-bottom: 0px;
    padding-right: 60px;
    height: 85vh;
    border-right-style: solid;
    border-right-color: #e7e5f2;
    border-right-width: 1px;
    filter: drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.6))
      drop-shadow(-1px 0px 0px rgba(0, 0, 0, 0.05));
  }
`;

export const WrapperRightAndDownSite = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 50px;
    padding-left: 60px;
    flex: 60%;
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const BalanceNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
  }
`;
