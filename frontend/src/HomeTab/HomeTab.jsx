import {
  TableWrapper,
  TableContainer,
  TableContainerBig,
  TableHeader,
  TableHeaderBig,
  Table,
  List,
  ListItem,
  ListItemValue,
  ListBig,
  TableNextRowsBig,
  HeaderCell,
  DataCell,
  DeleteButton,
  Button,
  StyledTable,
  EditText,
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
  formatDate,
} from "../../utils/formatUtils";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import Media from "react-media";

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const fetchedTransactions = transactions.slice().reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const TransactionsDeleteHandler = async (id) => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchTransactions());
  };

  const transformedTableTransactions = fetchedTransactions.map(
    (item, index) => {
      const deleteBtn = (
        <DeleteButton
          type="submit"
          onClick={() => TransactionsDeleteHandler(item._id)}
        >
          Delete
        </DeleteButton>
      );

      const editBtn = (
        <Button type="button">
          <EditIcon></EditIcon>
          <EditText>Edit</EditText>
        </Button>
      );

      return [
        { header: "Date", value: formatDate(item.date) },
        { header: "Type", value: item.type },
        { header: "Category", value: item.category },
        { header: "Comment", value: item.comment },
        { header: "Sum", value: amountFormatter(item.amount.toString()) },
        { header: deleteBtn, value: editBtn },
      ];
    }
  );

  return (
    <>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.medium && (
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
                            {formatDate(option.date)}
                          </DataCell>
                          <DataCell style={{ width: 37, textAlign: "center" }}>
                            {typeFormatter(option.type)}
                          </DataCell>
                          <DataCell style={{ width: 71 }}>
                            {option.category}
                          </DataCell>
                          <DataCell style={{ width: 120 }}>
                            {option.comment}
                          </DataCell>
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
                              onClick={() =>
                                TransactionsDeleteHandler(option._id)
                              }
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
            )}
            {matches.small && (
              <TableContainer>
                <StyledTable>
                  {transformedTableTransactions.map((item, rowIndex) => {
                    const type = item[1].value;

                    return (
                      <List key={rowIndex}>
                        {item.map((option, columnIndex) => (
                          <ListItem
                            key={columnIndex}
                            style={{
                              borderLeftColor: amountColorFormatter(type),
                            }}
                          >
                            <TableHeader>{option.header}</TableHeader>
                            <ListItemValue>{option.value}</ListItemValue>
                          </ListItem>
                        ))}
                      </List>
                    );
                  })}
                </StyledTable>
              </TableContainer>
            )}
          </>
        )}
      </Media>
    </>
  );
};
