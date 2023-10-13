import { Home } from "./HomeTab.styled";
import { fetchTransactions } from "../../redux/finance/operations";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const HomeTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  return (
    <>
      <Home>
        <h2>Home</h2>
      </Home>
    </>
  );
};
