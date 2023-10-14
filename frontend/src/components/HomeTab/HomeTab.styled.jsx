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
  height: 100vh;
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
  height: 100vh;
  animation: ${showIn} 500ms linear;

  @media screen and (min-width: 1280px) {
    margin-top: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  text-align: left;

  position: relative;
  &::before {
    content: "";
    position: absolute;

    top: 0;
    left: 20;
    width: 100%;
    height: 52px;
    background-color: var(--font-light);
    border-radius: 30px 30px;
    z-index: -1;
  }
`;
export const TableBody = styled.tbody`
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;
export const TableHeaderCell = styled.th`
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 14px 5px;
`;

export const TableNextRows = styled.tr`
  border-bottom: 1px solid var(--border-transactions);
  &:last-child {
    border: none;
  }
`;

export const TableCell = styled.td`
  padding: 14px 5px;
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
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  &:hover svg path#Icon {
    fill: var(--brand-accent);
  }
`;
