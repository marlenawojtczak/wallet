import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTotals,
  fetchTotalsByDate,
  fetchTransactions,
  deleteTransaction,
  updateTransaction,
} from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
  transactions: [],
};

const handleFulfilled = (state, { payload }) => {
  state.totalIncome = payload.totalIncome;
  state.totalExpense = payload.totalExpense;
  state.totalBalance = payload.totalBalance;
  state.totals = payload.totals;
};

const handleFetchTransactions = (state, { payload }) => {
  return {
    ...state,
    transactions: payload,
  };
};

const handleDeleteTransaction = (state) => {
  return {
    ...state,
  };
};

const handleUpdateTransaction = (state, { payload }) => {
  const index = state.transactions.findIndex(
    (transaction) => transaction._id === payload._id
  );
  if (index !== -1) {
    state.transactions[index] = {
      ...state.transactions[index],
      ...payload,
    };
  }
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotals.fulfilled, handleFulfilled)
      .addCase(fetchTotalsByDate.fulfilled, handleFulfilled)
      .addCase(fetchTransactions.fulfilled, handleFetchTransactions)
      .addCase(deleteTransaction.fulfilled, handleDeleteTransaction)
      .addCase(updateTransaction.fulfilled, handleUpdateTransaction);
  },
});

export const financeReducer = financeSlice.reducer;
