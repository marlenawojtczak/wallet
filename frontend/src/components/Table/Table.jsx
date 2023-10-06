import Media from "react-media";
import {
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
// import { useState } from "react";
import Select from "react-select";

export const Table = ({ options }) => {
  // const [selectedMonth, setSelectedMonth] = useState("march");
  // const [selectedYear, setSelectedYear] = useState("2023");

  const months = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
  ];
  const years = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

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
                  // value={selectedMonth}
                  // onChange={(e) => setSelectedMonth(e.target.value)}
                  options={months}
                  styles={SelectStylesSmall}
                  placeholder={"Month"}
                ></Select>
                <Select
                  // value={selectedYear}
                  // onChange={(e) => setSelectedYear(e.target.value)}
                  options={years}
                  styles={SelectStylesSmall}
                  placeholder={"Year"}
                ></Select>
              </>
            )}
            {matches.medium && (
              <>
                <Select
                  // value={selectedMonth}
                  // onChange={(e) => setSelectedMonth(e.target.value)}
                  options={months}
                  styles={SelectStylesMedium}
                  placeholder={"Month"}
                ></Select>
                <Select
                  // value={selectedYear}
                  // onChange={(e) => setSelectedYear(e.target.value)}
                  options={years}
                  styles={SelectStylesMedium}
                  placeholder={"Year"}
                ></Select>
              </>
            )}
            {matches.large && (
              <>
                <Select
                  // value={selectedMonth}
                  // onChange={(e) => setSelectedMonth(e.target.value)}
                  options={months}
                  styles={SelectStylesLarge}
                  placeholder={"Month"}
                ></Select>
                <Select
                  // value={selectedYear}
                  // onChange={(e) => setSelectedYear(e.target.value)}
                  options={years}
                  styles={SelectStylesLarge}
                  placeholder={"Year"}
                ></Select>
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
                style={{ backgroundColor: `${option.color}` }}
              ></ColorIcon>
              <Category>{option.label}</Category>
              <Amount>3000</Amount>
            </ListItem>
          ))}
        </List>
        <Sum>
          <Expenses>
            <span>Expenses:</span>{" "}
            <span style={{ color: `var(--brand-accent)` }}>1000</span>
          </Expenses>
          <Income>
            <span>Income:</span>{" "}
            <span style={{ color: `var(--brand-secondary)` }}>30000</span>
          </Income>
        </Sum>
      </StyledTable>
    </TableContainer>
  );
};
