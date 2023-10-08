import {
  TableWrapper,
  TableContainer,
  Table,
  TableHead,
  TableFirstRow,
  TableBody,
  ImageWrapper,
  TableNextRows,
} from "./Currency.styled";

import img from "../../assets/images/mountains.png";

export const Currency = () => {
  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableFirstRow>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </TableFirstRow>
          </TableHead>
          <ImageWrapper>
            <TableBody>
              <img src={img} alt="mountains" />
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
          </ImageWrapper>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};
