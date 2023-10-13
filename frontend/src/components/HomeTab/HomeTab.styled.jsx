import styled, { keyframes } from "styled-components";
const showIn = keyframes`
  0% {
    opacity: 0;
  }
100% {
    opacity: 1;
}
`;

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

export const ListItem = styled.tr`
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

export const MainListItem = styled.li``;

/////////////

export const TableWrapper = styled.div`
  height: 100vh;
  animation: ${showIn} 500ms linear;
  width: 100%;
`;

export const TableContainerBig = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  margin-top: 10px;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
`;

export const TableHeaderBig = styled.thead`
  display: flex;
  padding: 12px 20px;
  gap: 20px;
  justify-content: space-between;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  border-radius: 30px 30px 0 0;
  background-color: var(--bg-light);
`;

export const HeaderCell = styled.th`
  text-align: left;
  width: 14%;
`;

export const ListBig = styled.tbody`
  display: flex;
  flex-direction: column;

  padding: 12px 20px 52px;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const TableNextRowsBig = styled.tr`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 0 14px 0;
  justify-content: space-between;
  box-shadow: 0px 1px 0px var(--bg-gray);
`;
export const DataCell = styled.td`
  text-align: left;
  width: 14%;
`;
export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 67px;
  font-size: 14px;
  font-style: normal;
  font-family: Circe;
  font-weight: 400;
  line-height: normal;

  border: none;
  border-radius: 18px;
  padding: 4px 0;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  cursor: pointer;
  margin: auto;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  border-color: transparent;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  &:hover svg path#Icon {
    fill: var(--brand-accent);
  }
`;
