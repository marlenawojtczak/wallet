import { DiagramTable } from "./DiagramTab.styled";
import { Table } from "../Table";

const options = [
  { label: "Main expenses", color: "var(--expenses)" },
  { label: "Products", color: "var(--products)" },
  { label: "Car", color: "var(--car)" },
  { label: "Self care", color: "var(--self)" },
  { label: "Child care", color: "var(--child)" },
  { label: "Household products", color: "var(--house)" },
  { label: "Education", color: "var(--education)" },
  { label: "Leisure", color: "var(--leisure)" },
  { label: "Other expenses", color: "var(--other)" },
];

export const DiagramTab = () => {
  return (
    <>
      <DiagramTable>
        <Table options={options} />
      </DiagramTable>
    </>
  );
};
