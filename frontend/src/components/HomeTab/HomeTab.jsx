import {
  TableWrapper,
  TableHead,
  TableHeader,
  Table,
  TableBody,
  List,
  ListItem,
  ListItemValue,
  TableCell,
  TableHeaderCell,
  TableHeaderCellFirst,
  TableHeaderCellLast,
  DeleteButton,
  Button,
  StyledTable,
  EditText,
  TableNextRows,
  TableCellType,
  TableHeaderCellNone,
  TableCellButton,
  Message,
  Plus,
} from "./HomeTab.styled";
import {
  fetchTransactions,
  deleteTransaction,
  fetchTotals,
} from "../../redux/finance/operations";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  openModalEditTransaction,
  closeModalEditTransaction,
} from "../../redux/global/globalSlice";
import { ModalEditTransaction } from "../../components/ModalEditTransaction";
import { selectIsModalEditTransactionOpen } from "../../redux/global/selectors";
import { selectTransactions } from "../../redux/finance/selectors";
import {
  amountFormatter,
  typeFormatter,
  amountColorFormatter,
  formatDate,
} from "../../utils/formatUtils";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import Media from "react-media";

export const HomeTab = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalEditTransactionOpen);
  const id = useSelector(selectIsModalEditTransactionOpen);

  const handleOpenModal = (id) => {
    dispatch(openModalEditTransaction(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModalEditTransaction());
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const transactions = useSelector(selectTransactions);
  const fetchedTransactions = transactions.slice().reverse();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const TransactionsDeleteHandler = async (id) => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchTransactions());
    await dispatch(fetchTotals());
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
        <Button type="button" onClick={() => handleOpenModal(item._id)}>
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
                <Table>
                  <TableHead>
                    <TableHeaderCellFirst>Date</TableHeaderCellFirst>
                    <TableHeaderCell>Type</TableHeaderCell>
                    <TableHeaderCell>Category</TableHeaderCell>
                    <TableHeaderCell>Comment</TableHeaderCell>
                    <TableHeaderCell>Sum</TableHeaderCell>
                    <TableHeaderCellNone></TableHeaderCellNone>
                    <TableHeaderCellLast></TableHeaderCellLast>
                  </TableHead>

                  <TableBody>
                    {fetchedTransactions.length === 0 ? (
                      <TableNextRows>
                        <TableCell colSpan="7">
                          <Message>
                            There are no transactions. You can add one with the
                            plus button <Plus>+</Plus> in the right bottom
                            corner.
                          </Message>
                        </TableCell>
                      </TableNextRows>
                    ) : (
                      fetchedTransactions.map((option, index) => (
                        <TableNextRows key={index}>
                          <TableCell>{formatDate(option.date)}</TableCell>
                          <TableCellType>
                            {typeFormatter(option.type)}
                          </TableCellType>
                          <TableCell>{option.category}</TableCell>
                          <TableCell>{option.comment}</TableCell>
                          <TableCell
                            style={{
                              color: amountColorFormatter(option.type),
                            }}
                          >
                            {amountFormatter(option.amount)}
                          </TableCell>
                          <TableCell>
                            <Button
                              type="button"
                              onClick={() => handleOpenModal(option._id)}
                              option={option}
                            >
                              <EditIcon></EditIcon>
                            </Button>
                          </TableCell>
                          <TableCellButton>
                            <DeleteButton
                              type="submit"
                              onClick={() =>
                                TransactionsDeleteHandler(option._id)
                              }
                            >
                              Delete
                            </DeleteButton>
                          </TableCellButton>
                        </TableNextRows>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableWrapper>
            )}
            {matches.small && (
              <StyledTable>
                {fetchedTransactions.length === 0 ? (
                  <tr>
                    <td colSpan="7">
                      <Message>
                        There are no transactions. You can add one with the plus
                        button <Plus>+</Plus> in the right bottom corner.
                      </Message>
                    </td>
                  </tr>
                ) : (
                  transformedTableTransactions.map((item, rowIndex) => {
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
                  })
                )}
              </StyledTable>
            )}
          </>
        )}
      </Media>
      <ModalEditTransaction
        isOpen={isOpen}
        onClose={handleCloseModal}
        id={id}
      />
    </>
  );
};
