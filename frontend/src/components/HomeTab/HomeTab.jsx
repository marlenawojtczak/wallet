import {
  TableContainer,
  TableHeader,
  List,
  ListItem,
} from "../HomeTab/HomeTab.styled";
import {
  Amount,
  Category,
  Expenses,
  Income,
  StyledTable,
  Sum,
} from "../Table/Table.styled";
import { Home } from "./HomeTab.styled";
import { fetchTransactions } from "../../redux/finance/operations";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const options = [
  { header: "Date", value: "Today" },
  { header: "Type", value: "I'm blu da bu di bi da" },
  { header: "Category", value: "Dogos w kanapce" },
  { header: "Comment", value: "Makarena" },
  { header: "Sum", value: "14000" },
];

export const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <>
      {/* <Home> */}
      <TableContainer>
        <StyledTable>
          <List options={options}>
            {options.map((option, index) => (
              <ListItem key={index}>
                <TableHeader>{option.header}</TableHeader>
                <ListItem>{option.value}</ListItem>
              </ListItem>
            ))}
          </List>

          {/* <Sum>
            <Expenses>
              <span>Expenses:</span>{" "}
              <span style={{ color: `var(--brand-accent)` }}>
              
              </span>
            </Expenses>
            <Income>
              <span>Income:</span>{" "}
              <span style={{ color: `var(--brand-secondary)` }}>
              </span>
            </Income>
          </Sum> */}
        </StyledTable>
      </TableContainer>
      {/* </Home> */}
    </>
  );
};
