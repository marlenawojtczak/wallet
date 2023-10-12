import {
  TableWrapper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableNextRows,
} from "./Currency.styled";

export const Currency = () => {
  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </TableHead>
          <TableBody>
            <TableNextRows>
              <td>USD</td>
              <td>27.55</td>
              <td>27.65</td>
            </TableNextRows>
            <TableNextRows>
              <td>EUR</td>
              <td>30.00</td>
              <td>30.10</td>
            </TableNextRows>
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};
