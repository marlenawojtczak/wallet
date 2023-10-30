import styled, { keyframes } from "styled-components";

const showIn = keyframes`
  0% {
    opacity: 0;
  }
100% {
    opacity: 1;
}
`;

export const TableHeader = styled.div`
  display: flex;
  font-family: "Circe";
  font-size: 18px;
  font-weight: 700;
  background-color: var(--bg-light);
  align-items: center;
  padding-left: 20px;
`;

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;

  max-height: 470px;
  overflow-y: auto;
  margin-bottom: 8px;
  border-radius: 10px;
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
  box-shadow: 0px 1px 0px var(--bg-gray);
  border-left-width: 5px;
  border-left-style: solid;
  background-color: var(--bg-light);
  border-bottom: 1px solid var(--bg-gray);
`;

export const ListItemValue = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 47px;
  align-items: center;
  font-family: "Circe";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0;
  padding-right: 20px;
`;

export const ItemValue = styled.p`
  padding-left: 16px;
  flex-grow: 1;
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  animation: ${showIn} 500ms linear;
`;

export const MainListItem = styled.li``;

export const EditText = styled.span`
  font-family: Circe;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  padding: 0;
  margin: 0;
  padding-left: 5px;
  &:hover {
    cursor: pointer;
    color: var(--brand-accent);
  }
`;

// min-width: 768px

export const TableWrapper = styled.div`
  height: 55vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #a7a6a6;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  scrollbar-width: thin;
  scrollbar-color: #afafaf #f1f1f1;

  @media screen and (min-width: 1280px) {
    height: 75vh;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead`
  position: sticky;
  text-align: left;
  top: 0px;
  background-color: var(--font-light);
`;
export const TableHeaderCell = styled.th`
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 20px 0px 20px 28px;
  @media screen and (min-width: 1280px) {
    padding: 20px 0px 20px 28px;
  }
`;
export const TableHeaderCellFirst = styled(TableHeaderCell)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const TableHeaderCellLast = styled(TableHeaderCell)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const TableHeaderCellNone = styled.th`
  width: 5%;
`;

export const TableBody = styled.tbody``;

export const TableNextRows = styled.tr`
  border-bottom: 1px solid var(--border-transactions);
  &:last-child {
    border: none;
  }
`;

export const TableCell = styled.td`
  padding: 15px 25px 15px;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 1280px) {
    padding: 20px 0px 15px 28px;
  }
`;
export const TableCellButton = styled.td`
  display: flex;
  padding-top: 7px;
  padding-right: 20px;
  @media screen and (min-width: 1280px) {
    padding-top: 9px;
    padding-right: 15px;
  }
`;

export const TableCellType = styled.td`
  padding-left: 40px;
`;

export const DeleteButton = styled.button`
  width: 67px;

  font-size: 14px;
  font-style: normal;
  font-family: Circe;
  font-weight: 400;
  line-height: normal;
  margin: auto;
  border: none;
  border-radius: 18px;
  padding: 10px 10px;
  display: flex;

  justify-content: center;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  border-color: transparent;
  background-color: transparent;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:hover svg path#Icon {
    fill: var(--brand-accent);
  }
`;

export const Message = styled.p`
  text-align: center;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 14px 0 110px 0;
`;
export const Plus = styled.span`
  display: inline-block;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;
