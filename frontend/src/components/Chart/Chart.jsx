import { StyledChart, InsideText, ChartHeader } from "./Chart.styled";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { amountFormatter } from "../../utils/formatUtils";

Chart.register(CategoryScale);

export const ChartContainer = () => {
  const data = [
    { label: "Main expenses", color: "#fed057", value: "3000" },
    { label: "Products", color: "#ffd8d0", value: "3000" },
    { label: "Car", color: "#fd9498", value: "3000" },
    { label: "Self care", color: "#c5baff", value: "3000" },
    { label: "Child care", color: "#6e78e8", value: "3000" },
    { label: "Household products", color: "#4a56e2", value: "3000" },
    { label: "Education", color: "#81e1ff", value: "3000" },
    { label: "Leisure", color: "#24cca7", value: "3000" },
    { label: "Other expenses", color: "#00ad84", value: "3000" },
  ];
  const balance = "100999";

  const chartData = {
    labels: data.map((row) => row.label),
    datasets: [
      {
        label: "Statistics",
        data: data.map((row) => row.value),
        backgroundColor: data.map((row) => row.color),
        borderWidth: 0,
        weight: 1,
      },
    ],
  };

  const options = {
    cutout: "75%",
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <StyledChart>
        <ChartHeader>Statistics</ChartHeader>
        <Doughnut data={chartData} options={options} />
        <InsideText>₴ {amountFormatter(balance)}</InsideText>
      </StyledChart>
    </>
  );
};
