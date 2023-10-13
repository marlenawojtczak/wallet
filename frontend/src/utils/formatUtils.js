import moment from "moment";

export const months = () => {
  const months = moment.months();
  const reformattedArray = months.map((month) => ({
    value: month,
    label: month,
  }));
  return reformattedArray;
};

export const years = () => {
  const years = [];
  const dateStart = moment().subtract(10, "y");
  const dateEnd = moment();
  while (dateEnd.diff(dateStart, "years") >= 0) {
    years.push(dateStart.format("YYYY"));
    dateStart.add(1, "year");
  }
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

export const dateFormatter = (date) => {
  const inputDate = new Date(date);
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth() + 1;
  const day = inputDate.getDate();

  const formattedYear = year.toString().slice(2);
  const formattedMonth = month.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  const formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear}`;
  return formattedDate;
};

export const typeFormatter = (type) => {
  return type === "Income" ? "+" : "-";
};

export const amountColorFormatter = (type) => {
  return type === "Income" ? "var(--brand-secondary)" : "var(--brand-accent)";
};
