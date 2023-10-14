import moment from "moment";

export const months = () => {
  const months = moment.months();
  const reformattedArray = months.map((month) => ({
    value: month,
    label: month,
  }));
  return reformattedArray;
};

export const changeMonthToNumber = (namedMonth) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthNumber = (months.indexOf(namedMonth) + 1)
    .toString()
    .padStart(2, "0");

  return monthNumber;
};

export const years = (fetchedTransactions) => {
  const yearsArray = fetchedTransactions.map((transaction) =>
    new Date(transaction.date).getFullYear()
  );
  const uniqueYearsArray = [...new Set(yearsArray)];
  const years = uniqueYearsArray.sort((a, b) => b - a);
  const reformattedArray = years.map((year) => ({
    value: year,
    label: year,
  }));
  return reformattedArray;
};

export const amountFormatter = (amount) => {
  const num = Number(amount).toFixed(2);
  const formattedNumber = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return formattedNumber;
};

export const typeFormatter = (type) => {
  return type === "Income" ? "+" : "-";
};

export const amountColorFormatter = (type) => {
  return type === "Income" ? "var(--brand-secondary)" : "var(--brand-accent)";
};

export const formatDate = (date) => {
  return moment(date).format("DD.MM.YYYY");
};
