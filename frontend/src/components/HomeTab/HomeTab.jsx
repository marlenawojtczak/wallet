import {
  TableWrapper,
  TableContainer,
  TableContainerBig,
  TableHeader,
  TableHeaderBig,
  Table,
  List,
  ListItem,
  ListBig,
  TableNextRowsBig,
  HeaderCell,
  DataCell,
  DeleteButton,
  Button,
} from "./HomeTab.styled";
import {
  fetchTransactions,
  deleteTransaction,
} from "../../redux/finance/operations";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTransactions } from "../../redux/finance/selectors";
import {
  amountFormatter,
  dateFormatter,
  typeFormatter,
  amountColorFormatter,
} from "../../utils/formatUtils";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

export const HomeTab = () => {
  const fetchedTransactions = useSelector(selectTransactions);
  // console.log(fetchedTransactions);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [fetchedTransactions]);

  // const openModal = () => {
  //   dispatch(openModalEdit());
  // };

  const options = [
    { header: "Date", value: "Today" },
    { header: "Type", value: "I'm blu da bu di bi da" },
    { header: "Category", value: "Dogos w kanapce" },
    { header: "Comment", value: "Makarena" },
    { header: "Sum", value: "14000" },
  ];

  const TransactionsDeleteHandler = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      <TableWrapper>
        <TableContainerBig>
          <Table>
            <TableHeaderBig>
              <HeaderCell style={{ width: 55 }}>Date</HeaderCell>
              <HeaderCell style={{ width: 37 }}>Type</HeaderCell>
              <HeaderCell style={{ width: 71 }}>Category</HeaderCell>
              <HeaderCell style={{ width: 120 }}>Comment</HeaderCell>
              <HeaderCell style={{ width: 80, textAlign: "right" }}>
                Sum
              </HeaderCell>
              <HeaderCell style={{ width: 14 }}></HeaderCell>
              <HeaderCell style={{ width: 67 }}></HeaderCell>
            </TableHeaderBig>

            <ListBig fetchedTransactions={fetchedTransactions}>
              {fetchedTransactions.map((option, index) => (
                <TableNextRowsBig key={index}>
                  <DataCell style={{ width: 55 }}>
                    {dateFormatter(option.date)}
                  </DataCell>
                  <DataCell style={{ width: 37, textAlign: "center" }}>
                    {typeFormatter(option.type)}
                  </DataCell>
                  <DataCell style={{ width: 71 }}>{option.category}</DataCell>
                  <DataCell style={{ width: 120 }}>{option.comment}</DataCell>
                  <DataCell
                    style={{
                      width: 80,
                      textAlign: "right",
                      color: amountColorFormatter(option.type),
                    }}
                  >
                    {amountFormatter(option.amount)}
                  </DataCell>
                  <DataCell style={{ width: 14 }}>
                    {/* <Button type="button" onClick={openModal}> */}
                    <Button type="button">
                      <EditIcon></EditIcon>
                    </Button>
                  </DataCell>
                  <DataCell style={{ width: 67 }}>
                    <DeleteButton
                      type="submit"
                      onClick={() => TransactionsDeleteHandler(option._id)}
                    >
                      Delete
                    </DeleteButton>
                  </DataCell>
                </TableNextRowsBig>
              ))}
            </ListBig>
          </Table>
        </TableContainerBig>
      </TableWrapper>

      {/* <TableContainer>
        <StyledTable>
          <List options={options}>
            {options.map((option, index) => (
              <ListItem key={index}>
                <TableHeader>{option.header}</TableHeader>
                <ListItem>{option.value}</ListItem>
              </ListItem>
            ))}
          </List> */}

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
      {/* </StyledTable>
      </TableContainer> */}
      {/* </Home> */}
    </>
  );
};
