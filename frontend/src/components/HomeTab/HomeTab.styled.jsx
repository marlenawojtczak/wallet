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
  font-size: 15px;
  font-weight: 700;
  background-color: var(--bg-light);
  align-items: center;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  margin-bottom: 8px;
  border-radius: 10px;
  overflow-y: auto;
`;

export const ListItem = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 47px;
  align-items: center;
  font-family: OpenSans;
  font-size: 14px;
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
  font-size: 14px;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 0;
  margin: 0;
  padding-left: 5px;
  &:hover {
    font-weight: 500;
    cursor: pointer;
    color: var(--font-light);
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
  z-index: 999;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 20px 0px 20px 20px;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
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

export const TypeSpace = styled.div`
  padding-left: 20px;
`;

export const TableCell = styled.td`
  padding: 5px 15px;
  font-family: OpenSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  color: var(--bg-light);
  line-height: normal;

  @media screen and (min-width: 1280px) {
    padding: 5px 20px;
    font-size: 15px;
  }
`;

export const TableCellActions = styled.tr`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
  @media screen and (min-width: 1280px) {
    gap: 15px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: OpenSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  border: 1px solid var(--font-dark);
  background: linear-gradient(to right, #00aaff, #00aaff, #0074cc);
  border-radius: 10px;
  color: var(--font-dark);
  backdrop-filter: blur(5px);
  transition: all 150ms ease;
  padding: 5px 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
  &:hover svg {
    fill: var(--font-light);
  }
  &:hover {
    color: var(--font-light);
    border: 1px solid var(--nav-active);
    background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
  }
  @media screen and (min-width: 768px) {
    background: transparent;
    border: 1px solid #0074cc;
    svg {
      fill: var(--font-light);
    }
    &:hover {
      background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
    }
  }
  @media screen and (min-width: 1280px) {
    border: none;
    background: none;
    border: 1px solid var(--nav-active);
    backdrop-filter: none;

    svg {
      fill: var(--font-light);
      stroke: var(--font-light);
    }
    &:hover svg {
      fill: var(--font-light);
    }
    &:hover {
      color: var(--font-light);
      border: 1px solid var(--nav-active);
      background: linear-gradient(to right, #00aaff, #0074cc, #00aaff);
    }
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  font-family: OpenSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid var(--font-dark);
  background-color: rgba(216, 0, 0, 0.5);
  border-radius: 10px;
  color: var(--font-dark);
  transition: all 150ms ease;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: var(--font-light);
    border: 1px solid var(--font-dark);
    background: linear-gradient(to right, #e61313, #e60b0b, #ff0000);
  }

  @media screen and (min-width: 768px) {
    border: 1px solid var(--bg-light);
    background-color: transparent;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 300;
    color: var(--bg-light);
    width: 100%;
    padding: 5px 10px;
    backdrop-filter: blur(5px);
    &:hover {
      color: var(--brand-accent);
      border: 1px solid var(--brand-accent);
      background: none;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 15px;
    font-weight: 400;
    width: 90%;
    padding: 10px 10px;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-family: OpenSans;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: normal;
  padding: 20px 0 110px 0;
  color: var(--font-light);
  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
export const Plus = styled.span`
  text-align: center;

  color: var(--bg-light);
  padding: 0px 5px;

  border: 1px solid var(--font-light);
  background-color: transparent;
  border-radius: 5px;
  width: 24px;
  height: 24px;
`;
