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
  changeNumberToMonth,
} from "../../utils/formatUtils";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalIncome,
  selectTotalExpenses,
  selectTransactions,
  selectTotals,
} from "../../redux/finance/selectors";
import { fetchTotalsByDate } from "../../redux/finance/operations";
import {
  getColor,
  getCurrentYear,
  getCurrentMonth,
} from "../../utils/helperFunctions";

export const Table = () => {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  const fetchedTransactions = useSelector(selectTransactions);

  const totals = useSelector(selectTotals);

  const filteredTotals = totals
    .filter((item) => item.total !== 0)
    .filter((item) => item.category !== "Income");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchingData = async () => {
      await dispatch(
        fetchTotalsByDate({ month: selectedMonth, year: selectedYear })
      );
    };
    fetchingData();
    setLoading(false);
  }, []);

  const getMonths = () => {
    if (selectedYear) {
      return months(fetchedTransactions, selectedYear);
    }
  };

  const chekingFirstMonth = () => {
    const monthsArr = getMonths();
    const monthtoCheck = changeNumberToMonth(getCurrentMonth());

    const isMonthInArray = monthsArr.some((monthObj) => {
      return monthObj.value === monthtoCheck;
    });

    if (isMonthInArray) {
      return setSelectedMonth(getCurrentMonth());
    } else if (monthsArr[0] === undefined) {
      return setSelectedMonth(getCurrentMonth());
    } else {
      return setSelectedMonth(changeMonthToNumber(monthsArr[0].label));
    }
  };

  useEffect(() => {
    chekingFirstMonth();
  }, [selectedYear]);

  useEffect(() => {
    const fetchingData = async () => {
      if (
        getMonths().some(
          (month) => month.value === changeNumberToMonth(selectedMonth)
        )
      ) {
        await dispatch(
          fetchTotalsByDate({ month: selectedMonth, year: selectedYear })
        );
      }
    };

    fetchingData();
  }, [selectedMonth, selectedYear]);

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
                  defaultValue={{
                    label: changeNumberToMonth(selectedMonth),
                  }}
                  value={{
                    label: changeNumberToMonth(selectedMonth),
                  }}
                  onChange={(e) =>
                    setSelectedMonth(changeMonthToNumber(e.value))
                  }
                  options={getMonths()}
                  styles={SelectStylesSmall}
                  placeholder={"Month"}
                ></Select>
                <Select
                  defaultValue={{ label: selectedYear }}
                  onChange={(e) => setSelectedYear(e.value)}
                  options={years(fetchedTransactions)}
                  styles={SelectStylesSmall}
                ></Select>
              </>
            )}
            {matches.medium && (
              <>
                <WrapperMonth>
                  <Select
                    defaultValue={{
                      label: changeNumberToMonth(selectedMonth),
                    }}
                    value={{
                      label: changeNumberToMonth(selectedMonth),
                    }}
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
                    defaultValue={{ label: selectedYear }}
                    onChange={(e) => setSelectedYear(e.value)}
                    options={years(fetchedTransactions)}
                    styles={SelectStylesMedium}
                  ></Select>
                </WrapperYear>
              </>
            )}
            {matches.large && (
              <>
                <WrapperMonth>
                  <Select
                    defaultValue={{
                      label: changeNumberToMonth(selectedMonth),
                    }}
                    value={{
                      label: changeNumberToMonth(selectedMonth),
                    }}
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
                    defaultValue={{ label: selectedYear }}
                    onChange={(e) => setSelectedYear(e.value)}
                    options={years(fetchedTransactions)}
                    styles={SelectStylesLarge}
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
        <List filteredTotals={filteredTotals}>
          {filteredTotals.map((option, index) => (
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
