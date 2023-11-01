import { DiagramTable, WrapperDonat, WrapperTable } from "./DiagramTab.styled";
import { Table } from "../Table";
import { ChartContainer } from "../Chart";

export const DiagramTab = () => {
  return (
    <>
      <DiagramTable>
        <WrapperDonat>
          <ChartContainer />
        </WrapperDonat>
        <WrapperTable>
          <Table />
        </WrapperTable>
      </DiagramTable>
    </>
  );
};
