import styled from "styled-components";
import backgroundElipseBlue from "../../assets/images/ellipseBlue.png";
import backgroundElipsePink from "../../assets/images/ellipsePink.png";

export const BackgroundContainer = styled.div`
  background-color: var(--bg-accent);

  @media screen and (min-width: 768px) {
    /* background-image: url(${backgroundElipseBlue});
    background-repeat: no-repeat;
    background-position: left bottom; */

    /* position: relative; */
  }
  @media screen and (min-width: 1280px) {
    /* padding: 0;
    justify-content: center; */
  }
`;

export const BackgroundElipseBlue = styled.div`
  @media screen and (min-width: 768px) {
    /* position: absolute; */
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
  @media screen and (min-width: 768px) {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${backgroundElipsePink});
    background-repeat: no-repeat;
    background-position: left -80% top;
  }
  @media screen and (min-width: 1280px) {
    background-position: right -100% top;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin: 0 20px;

  backdrop-filter: blur(40px);

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 32px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperNavBal = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperLeftAndUpSite = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperRightAndDownSite = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
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

export const CurrencyNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
    width: 100%;
  }
`;

export const LeftSite = styled.div``;

export const RightSite = styled.div``;
