import {
  StyledChart,
  InsideText,
  ChartHeader,
  WrapperDonat,
} from "./Chart.styled";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { amountFormatter } from "../../utils/formatUtils";
import { selectTotalBalance } from "../../redux/finance/selectors";
import { useSelector, useDispatch } from "react-redux";
import { selectTotals } from "../../redux/finance/selectors";
import { getColor } from "../../utils/helperFunctions";

const plugin = {
  id: "emptyDoughnut",
  afterDraw(chart, args, options) {
    const { datasets } = chart.data;
    const { color, width, radiusDecrease } = options;
    let hasData = false;

    for (let i = 0; i < datasets.length; i += 1) {
      const dataset = datasets[i];
      hasData |= dataset.data.length > 0;
    }

    if (!hasData) {
      const {
        chartArea: { left, top, right, bottom },
        ctx,
      } = chart;
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;
      const r = Math.min(right - left, bottom - top) / 2;

      ctx.beginPath();
      ctx.lineWidth = width || 2;
      ctx.strokeStyle = color || "rgba(255, 128, 0, 0.5)";
      ctx.arc(centerX, centerY, r - radiusDecrease || 0, 0, 2 * Math.PI);
      ctx.stroke();
    }
  },
};

Chart.register(CategoryScale);
Chart.register(plugin);

export const ChartContainer = () => {
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
    cutout: "70%",
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      emptyDoughnut: {
        color: "#fff",
        width: 42,
        radiusDecrease: 22,
      },
    },
  };

  return (
    <>
      {/* <ChartHeader>Statistics</ChartHeader> */}
      <StyledChart>
        <WrapperDonat>
          <Doughnut data={chartData} options={options} />
        </WrapperDonat>
        <InsideText>PLN {amountFormatter(totalBalance)}</InsideText>
      </StyledChart>
    </>
  );
};
