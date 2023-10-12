import styled from "styled-components";

// export const Home = styled.div`
// @media screen and (max-width: 768px) {
//   height: 282px;
//   border: 2px solid red;
//   margin: 32px 20px 0;
//   border-radius: 10px;
//   text-align: center

// }
// @media screen and (min-width: 769px) and (max-width: 1279px) {
//   height: 58px;
//   width: 704px;
//   border: 2px solid orange;
//   margin: 20px auto;
//   border-radius: 30px;
//   text-align: center
// }
// @media screen and (min-width: 1280px) {
//   width: 715px;
//   height: 58px;
//   border: 2px solid blue;
//   border-radius: 30px;
//   position: absolute;
//   right: 16px;
//   top: 126px;
// `;

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

export const TableContainer = styled.div`
  margin: 0 20px;
  border-radius: 10px;
  text-align: center;
  border-left: 5px solid var(--brand-accent);

  // @media screen and (min-width: 769px) and (max-width: 1279px) {
  //   min-width: 336px;
  // }

  // @media screen and (min-width: 1280px) {
  //   padding-top: 65px;
  //   min-width: 395px;
  // }
`;

export const TableHeader = styled.div`
  display: flex;
  font-family: "Circe";
  font-size: 18px;
  font-weight: 700;
  background-color: var(--bg-light);
  align-items: center;

  // @media screen and (min-width: 769px) and (max-width: 1279px) {
  //   min-width: 336px;
  // }

  // @media screen and (min-width: 1280px) {
  //   padding-top: 65px;
  //   min-width: 395px;
  // }
`;

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  height: 100%;
  max-height: 470px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 47px;
  align-items: center;
  font-family: "Circe";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0 20px;
  box-shadow: 0px 1px 0px var(--bg-gray);

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ItemValue = styled.p`
  padding-left: 16px;
  flex-grow: 1;
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
