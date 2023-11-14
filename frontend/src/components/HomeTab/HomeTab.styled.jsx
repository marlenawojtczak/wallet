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
  font-family: OpenSans;
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
  font-family: OpenSans;
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
  font-family: OpenSans;
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
  font-family: OpenSans;
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
  height: 50vh;
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
    height: 70vh;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const TableHead = styled.thead`
  position: sticky;
  text-align: left;
  top: 0px;
  background-color: var(--font-light);
  & tr:first-child th:first-child {
    border-top-left-radius: 10px;
  }
  & tr:first-child th:last-child {
    border-top-right-radius: 10px;
  }
`;
export const TableHeaderCell = styled.th`
  font-family: OpenSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 20px 0px 20px 20px;
`;

export const TableBody = styled.tbody``;

export const SortIcon = styled.div`
  display: inline-block;
  padding-left: 6px;
`;

export const TableNextRows = styled.tr`
  border-bottom: 1px solid var(--border-transactions);
  &:last-child {
    border: none;
  }
`;

export const TableCellActions = styled.tr`
  display: flex;
  gap: 20px;
`;

export const TableCell = styled.td`
  padding: 15px 15px;
  font-family: OpenSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 200;
  color: var(--bg-light);
  line-height: normal;
  @media screen and (min-width: 1280px) {
    padding: 20px 20px;
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

export const DeleteButton = styled.button`
  font-family: OpenSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border: 1px solid var(--bg-light);
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 35px;
  margin: 30px 0 50px 0;
  color: var(--bg-light);
  backdrop-filter: blur(5px);
  transition: all 150ms ease;
  cursor: pointer;

  margin: auto;

  padding: 10px 10px;
  display: flex;

  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
  &:hover {
    color: var(--brand-accent);
    border: 1px solid var(--brand-accent);
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
    fill: var(--font-light);
  }
`;

export const Message = styled.p`
  text-align: center;
  font-family: OpenSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: normal;
  padding: 20px 0 110px 0;
  color: var(--font-light);
`;
export const Plus = styled.span`
  display: inline-block;
  color: var(--bg-light);
  background-color: var(--brand-secondary);
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;
