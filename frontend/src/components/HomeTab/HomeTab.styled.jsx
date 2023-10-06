import styled from "styled-components";

export const Home = styled.div`
@media screen and (max-width: 768px) {
  height: 282px;
  border: 2px solid red;
  margin: 32px 20px 0;
  border-radius: 10px;
  text-align: center
  
}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  height: 58px;
  width: 704px;
  border: 2px solid orange;
  margin: 20px auto;
  border-radius: 30px;
  text-align: center
}
@media screen and (min-width: 1280px) {
  width: 715px;
  height: 58px;
  border: 2px solid blue;
  border-radius: 30px;
  position: absolute;
  right: 16px;
  top: 126px;
`;

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
