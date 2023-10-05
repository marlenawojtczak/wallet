import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    height: 568px;
    border: 2px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    height: 1024px;
    border: 2px solid orange;
    margin: 0 auto;
  }
  @media screen and (min-width: 1280px) {
    height: 720px;
    border: 2px solid blue;
    margin: 0 auto;
  }
`;

export const Home = styled.div`
@media screen and (max-width: 768px) {
  height: 282px;
  border: 2px solid red;
  margin: 32px 20px 0;
  border-radius: 10px;
  
}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  height: 58px;
  border: 2px solid orange;
  margin: 0 auto;
  border-radius: 30px;
}
@media screen and (min-width: 1280px) {
  width: 715px;
  border: 2px solid blue;
  margin: 46px 16px 0 549px;
  border-radius: 30px;
`;

export const Balance = styled.div`
@media screen and (max-width: 768px) {
height: 80px;
margin: 128px 20px 0;
border-radius: 30px;
border: 2px solid black;

}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  height: 80px;
  border: 2px solid orange;
  border-radius: 30px;
  margin: 0 32px;
}
@media screen and (min-width: 1280px) {
  height: 80px;
  border: 2px solid blue;
  margin: 214px 0 32px 16px;
`;
