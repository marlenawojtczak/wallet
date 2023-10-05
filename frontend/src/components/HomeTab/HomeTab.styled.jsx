import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 769px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    display: flex;
    flex-direction: row;
  }
`;

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
  border: 2px solid blue;
  margin: 46px 16px 0 549px;
  border-radius: 30px;
`;
