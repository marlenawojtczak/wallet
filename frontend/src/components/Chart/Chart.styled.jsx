import styled from "styled-components";

export const StyledChart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin: 0px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const WrapperDonat = styled.div`
  width: 250px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 336px;
    height: 336px;
  }
`;

export const InsideText = styled.p`
  color: var(--font-light);
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translate(-50%, 50%);
  font-family: OpenSans;
  font-size: 18px;
  font-weight: 400;
  span {
    padding-left: 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    top: 41%;
  }
`;

export const ChartHeader = styled.p`
  text-align: center;
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 8px;
  letter-spacing: 1px;
  color: var(--font-dark);
  text-shadow: 1px 1px 0 var(--font-dark), 2px 1px 0 var(--font-dark),
    10px 2px 15px black;

  @media screen and (min-width: 768px) {
    text-align: left;
    margin-bottom: 20px;
    display: none;
  }
`;
