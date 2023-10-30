import moment from "moment";

const monthNames = [
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

export const months = (fetchedTransactions, selectedYear) => {
  const monthsInYear = Array(12).fill(false);

  fetchedTransactions.forEach((transaction) => {
    const transactionYear = new Date(transaction.date).getFullYear();
    if (transactionYear === selectedYear) {
      const month = new Date(transaction.date).getMonth();
      monthsInYear[month] = true;
    }
  });

  const result = monthNames.filter((month, index) => monthsInYear[index]);
  const reformattedArray = result.map((month) => ({
    value: month,
    label: month,
  }));
  return reformattedArray;
};

export const changeMonthToNumber = (namedMonth) => {
  const monthNumber = (monthNames.indexOf(namedMonth) + 1)
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
  return Number(amount).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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
