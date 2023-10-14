import Media from "react-media";
import {
  WrapperMonth,
  WrapperYear,
  TableContainer,
  StyledTable,
  List,
  ListItem,
  ColorIcon,
  Amount,
  Category,
  Sum,
  Expenses,
  Income,
  TableHeader,
  TableSelectors,
  SelectStylesSmall,
  SelectStylesMedium,
  SelectStylesLarge,
} from "./Table.styled";
import {
  months,
  years,
  amountFormatter,
  changeMonthToNumber,
} from "../../utils/formatUtils";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalIncome,
  selectTotalExpenses,
  selectTransactions,
} from "../../redux/finance/selectors";
import {
  fetchTotals,
  fetchTotalsByDate,
  fetchTransactions,
} from "../../redux/finance/operations";
import { getColor } from "../../utils/helperFunctions";

export const Table = ({ options }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const fetchedTransactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTotals());
  }, []);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const getMonths = () => {
    if (selectedYear) {
      return months(fetchedTransactions, selectedYear);
    }
  };

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      dispatch(fetchTotalsByDate({ month: selectedMonth, year: selectedYear }));
    }
  }, [dispatch, selectedMonth, selectedYear]);

  const totalIncome = useSelector(selectTotalIncome);
  const totalExpenses = useSelector(selectTotalExpenses);

  return (
    <TableContainer>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1279px)",
          large: "(min-width: 1280px)",
        }}
      >
        {(matches) => (
          <TableSelectors>
            {matches.small && (
              <>
                <Select
                  onChange={(e) =>
                    setSelectedMonth(changeMonthToNumber(e.value))
                  }
                  options={getMonths()}
                  styles={SelectStylesSmall}
                  placeholder={"Month"}
                ></Select>
                <Select
                  onChange={(e) => setSelectedYear(e.value)}
                  options={years(fetchedTransactions)}
                  styles={SelectStylesSmall}
                  placeholder={"Year"}
                ></Select>
              </>
            )}
            {matches.medium && (
              <>
                <WrapperMonth>
                  <Select
                    onChange={(e) =>
                      setSelectedMonth(changeMonthToNumber(e.value))
                    }
                    options={getMonths()}
                    styles={SelectStylesMedium}
                    placeholder={"Month"}
                  ></Select>
                </WrapperMonth>
                <WrapperYear>
                  <Select
                    onChange={(e) => setSelectedYear(e.value)}
                    options={years(fetchedTransactions)}
                    styles={SelectStylesMedium}
                    placeholder={"Year"}
                  ></Select>
                </WrapperYear>
              </>
            )}
            {matches.large && (
              <>
                <WrapperMonth>
                  <Select
                    onChange={(e) =>
                      setSelectedMonth(changeMonthToNumber(e.value))
                    }
                    options={getMonths()}
                    styles={SelectStylesLarge}
                    placeholder={"Month"}
                  ></Select>
                </WrapperMonth>
                <WrapperYear>
                  <Select
                    onChange={(e) => setSelectedYear(e.value)}
                    options={years(fetchedTransactions)}
                    styles={SelectStylesLarge}
                    placeholder={"Year"}
                  ></Select>
                </WrapperYear>
              </>
            )}
          </TableSelectors>
        )}
      </Media>

      <TableHeader>
        <span>Category</span>
        <span>Sum</span>
      </TableHeader>
      <StyledTable>
        <List options={options}>
          {options.map((option, index) => (
            <ListItem key={index}>
              <ColorIcon
                style={{ backgroundColor: getColor(option.category) }}
              ></ColorIcon>
              <Category>{option.category}</Category>
              <Amount>{amountFormatter(option.total)}</Amount>
            </ListItem>
          ))}
        </List>
        <Sum>
          <Expenses>
            <span>Expenses:</span>
            <span style={{ color: `var(--brand-accent)` }}>
              {amountFormatter(totalExpenses)}
            </span>
          </Expenses>
          <Income>
            <span>Income:</span>
            <span style={{ color: `var(--brand-secondary)` }}>
              {amountFormatter(totalIncome)}
            </span>
          </Income>
        </Sum>
      </StyledTable>
    </TableContainer>
  );
};
