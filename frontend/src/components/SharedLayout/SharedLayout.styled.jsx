import styled from "styled-components";
import backgroundElipseBlue from "../../assets/images/ellipseBlue.png";
import backgroundElipsePink from "../../assets/images/ellipsePink.png";

export const BackgroundContainer = styled.div`
  background-color: var(--bg-accent);

  @media screen and (min-width: 768px) {
    position: relative;
    background-image: url(${backgroundElipsePink}), url(${backgroundElipseBlue});
    background-repeat: no-repeat, no-repeat;
    background-position: right -25vw top, left bottom;
  }
  @media screen and (min-width: 1280px) {
    background-position: right top, left bottom;
  }
`;

export const Filter = styled.div`
  backdrop-filter: blur(40px);
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
  justify-content: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    padding-top: 40px;
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
