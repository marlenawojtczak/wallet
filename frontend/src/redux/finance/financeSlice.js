import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTotals,
  fetchTotalsByDate,
  fetchTransactions,
  deleteTransaction,
  updateTransaction,
  editTransactionAction,
} from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
  transactions: [],
  category: "",
  addedTransaction: null,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance: () => {
      return { ...initialState };
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    resetAddedTransaction: (state) => {
      state.addedTransaction = null;
    },
    editTransaction: editTransactionAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTotals.fulfilled, (state, action) => {
        return {
          ...state,
          totalIncome: action.payload.totalIncome,
          totalExpense: action.payload.totalExpense,
          totalBalance: action.payload.totalBalance,
          totals: action.payload.totals,
        };
      })
      .addCase(fetchTotalsByDate.fulfilled, (state, action) => {
        return {
          ...state,
          totalIncome: action.payload.totalIncome,
          totalExpense: action.payload.totalExpense,
          totalBalance: action.payload.totalBalance,
          totals: action.payload.totals,
        };
      })
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        return {
          ...state,
          transactions: payload,
        };
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        editTransactionAction(state, action);
        // do dodania logika aktualizacji Balance
      });
  },
});

export const {
  resetFinance,
  resetAddedTransaction,
  setType,
  setCategory,
  setAmount,
  setDate,
  setComment,
  editTransaction,
} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
