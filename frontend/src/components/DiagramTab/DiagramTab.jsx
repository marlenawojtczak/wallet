import { DiagramTable, WrapperDonat, WrapperTable } from "./DiagramTab.styled";
import { Table } from "../Table";
import { ChartContainer } from "../Chart";
import { useSelector, useDispatch } from "react-redux";
import { selectTotals } from "../../redux/finance/selectors";
import { fetchTotals } from "../../redux/finance/operations";
import { useState, useEffect } from "react";

export const DiagramTab = () => {
  const totals = useSelector(selectTotals);

  const filteredTotals = totals
    .filter((item) => item.total !== 0)
    .filter((item) => item.category !== "Income");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotals());
  }, []);

  return (
    <>
      <DiagramTable>
        <WrapperDonat>
          <ChartContainer data={filteredTotals} />
        </WrapperDonat>
        <WrapperTable>
          <Table options={filteredTotals} />
        </WrapperTable>
      </DiagramTable>
    </>
  );
};
