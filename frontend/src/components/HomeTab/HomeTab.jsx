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
  DeleteButton,
  EditButton,
  StyledTable,
  EditText,
  TableNextRows,
  Message,
  Plus,
  SortIcon,
  TableCellActions,
  TypeSpace,
} from "./HomeTab.styled";
import {
  fetchTransactions,
  deleteTransaction,
  fetchTotals,
} from "../../redux/finance/operations";
import React, { useEffect } from "react";
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
import { ReactComponent as EditIcon } from "../../assets/icons/editBtn.svg";
import Media from "react-media";
import { useTable, useSortBy } from "react-table";

export const HomeTab = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalEditTransactionOpen);
  const id = useSelector(selectIsModalEditTransactionOpen);
  const transactions = useSelector(selectTransactions);

  const handleOpenModal = (id) => {
    dispatch(openModalEditTransaction(id));
  };

  const handleCloseModal = () => {
    dispatch(closeModalEditTransaction());
  };

  if (isOpen) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "auto";
  }

  const fetchedTransactions = transactions.slice().reverse();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const TransactionsDeleteHandler = async (id) => {
    await dispatch(deleteTransaction(id));
    await dispatch(fetchTransactions());
    await dispatch(fetchTotals());
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: ({ value }) => <TypeSpace>{typeFormatter(value)}</TypeSpace>,
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Comment",
        accessor: "comment",
      },
      {
        Header: "Sum",
        accessor: "amount",
        Cell: ({ value }) => amountFormatter(value.toString()),
      },

      {
        Header: "",
        id: "actions",
        disableSortBy: true,
        Cell: ({ row }) => (
          <TableCellActions>
            <EditButton
              type="button"
              onClick={() => handleOpenModal(row.original._id)}
            >
              <EditIcon />
            </EditButton>

            <DeleteButton
              type="submit"
              onClick={() => TransactionsDeleteHandler(row.original._id)}
            >
              Delete
            </DeleteButton>
          </TableCellActions>
        ),
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data: transactions }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

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
        <EditButton type="button" onClick={() => handleOpenModal(item._id)}>
          <EditIcon></EditIcon>
          <EditText>Edit</EditText>
        </EditButton>
      );

      return [
        { header: "Date", value: formatDate(item.date) },
        { header: "Type", value: item.type },
        { header: "Category", value: item.category },
        { header: "Comment", value: item.comment },
        { header: "Sum", value: amountFormatter(item.amount.toString()) },
        { header: editBtn, value: deleteBtn },
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
                <Table {...getTableProps()}>
                  <TableHead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <TableHeaderCell
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            {column.render("Header")}
                            {!column.disableSortBy && (
                              <SortIcon>
                                {column.isSorted
                                  ? column.isSortedDesc
                                    ? " ↓"
                                    : " ↑"
                                  : " ↕️"}
                              </SortIcon>
                            )}
                          </TableHeaderCell>
                        ))}
                      </tr>
                    ))}
                  </TableHead>
                  <TableBody {...getTableBodyProps()}>
                    {rows.length === 0 ? (
                      <TableNextRows>
                        <TableCell colSpan="100%">
                          <Message>
                            There are no transactions. You can add one with the
                            plus button <Plus>Add</Plus> in the right bottom
                            corner.
                          </Message>
                        </TableCell>
                      </TableNextRows>
                    ) : (
                      rows.map((row) => {
                        prepareRow(row);
                        return (
                          <TableNextRows {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                              return (
                                <TableCell {...cell.getCellProps()}>
                                  {cell.render("Cell")}
                                </TableCell>
                              );
                            })}
                          </TableNextRows>
                        );
                      })
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
                        button <Plus>Add</Plus> in the right bottom corner.
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
