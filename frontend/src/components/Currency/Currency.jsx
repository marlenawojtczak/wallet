import {
  TableWrapper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableNextRows,
  TableHeaderCell,
  TableCell,
} from "./Currency.styled";

import axios from "axios";
import { useState, useEffect } from "react";

const currency_API_URL = "https://api.nbp.pl/api/exchangerates/rates/c/";

async function fetchCurrency(currencyCode) {
  try {
    const result = await axios.get(`${currency_API_URL}${currencyCode}`);
    const data = await result.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const Currency = () => {
  const [exchangeRate, setExchangeRate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currenciesToFetch = ["EUR", "USD"];
        const currencyData = await Promise.all(
          currenciesToFetch.map((currencyCode) => fetchCurrency(currencyCode))
        );

        setExchangeRate(currencyData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeaderCell>Currency</TableHeaderCell>
            <TableHeaderCell>Purchase</TableHeaderCell>
            <TableHeaderCell>Sale</TableHeaderCell>
          </TableHead>
          <TableBody>
            {exchangeRate.map((item, index) => (
              <TableNextRows key={index}>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.rates[0].ask.toFixed(2)}</TableCell>
                <TableCell>{item.rates[0].bid.toFixed(2)}</TableCell>
              </TableNextRows>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};
