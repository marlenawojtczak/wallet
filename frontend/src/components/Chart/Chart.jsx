import {
  StyledChart,
  InsideText,
  ChartHeader,
  WrapperDoughnut,
} from "./Chart.styled";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { amountFormatter } from "../../utils/formatUtils";
import { selectTotalBalance } from "../../redux/finance/selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectTotals } from "../../redux/finance/selectors";
import { getColor } from "../../utils/helperFunctions";
import { useState, useEffect } from "react";
import { fetchTotals } from "../../redux/finance/operations";

Chart.register(CategoryScale);

export const ChartContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotals());
  }, []);

  const totals = useSelector(selectTotals);

  const filteredTotals = totals
    .filter((item) => item.total !== 0)
    .filter((item) => item.category !== "Income");

  const totalBalance = useSelector(selectTotalBalance);

  const chartData = {
    labels: filteredTotals.map((row) => row.category),
    datasets: [
      {
        label: "Statistics",
        data: filteredTotals.map((row) => row.total),
        backgroundColor: filteredTotals.map((row) => getColor(row.category)),
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
        <WrapperDoughnut>
          <Doughnut data={chartData} options={options} />
          <InsideText>₴ {amountFormatter(totalBalance)}</InsideText>
        </WrapperDoughnut>
      </StyledChart>
    </>
  );
};
