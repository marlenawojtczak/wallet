import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTotals,
  fetchTotalsByDate,
  fetchTransactions,
  deleteTransaction,
  updateTransaction,
  addTransaction,
} from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
  transactions: [],
  type: "",
  category: "",
  amount: "",
  date: "",
  comment: "",
  addedTransaction: null,
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance: () => {
      return { ...initialState };
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
    resetAddedTransaction: (state) => {
      state.addedTransaction = null;
    },
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
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        return {
          ...state,
          transactions: action.payload,
        };
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        return {
          ...state,
        };
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        return {
          ...state,
          date: action.payload.date,
          type: action.payload.type,
          category: action.payload.category,
          comment: action.payload.comment,
          amount: action.payload.amount,
        };
      })

      .addCase(addTransaction.fulfilled, (state, action) => {
        return {
          ...state,
          category: action.payload.category,
          value: action.payload.value,
          date: action.payload.date,
          comment: action.payload.comment,
          addedTransaction: action.payload,
        };
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
} = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
