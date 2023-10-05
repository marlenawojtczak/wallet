import styled from "styled-components";

export const BalanceStyle = styled.div`
@media screen and (max-width: 768px) {
height: 80px;
margin: 12px 20px 0;
border-radius: 30px;
border: 2px solid black;
text-align: center

}
@media screen and (min-width: 769px) and (max-width: 1279px) {
  width: 336px;
  height: 80px;
  border: 2px solid orange;
  border-radius: 30px;
  margin: 0 32px;
  text-align: center
}
@media screen and (min-width: 1280px) {
  height: 80px;
  border: 2px solid blue;
  margin: 214px 0 32px 16px;
`;
