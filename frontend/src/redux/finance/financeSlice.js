import { createSlice } from "@reduxjs/toolkit";
import { fetchTotals, fetchTotalsByDate } from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
  category: "",
  value: "",
  date: "",
  comment: "",
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    resetFinance: () => {
      return { ...initialState };
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

      .addCase(addTransaction.fulfilled, (state, action) => {
        return {
          ...state,
          category: action.payload.category,
          value: action.payload.value,
          date: action.payload.date,
          comment: action.payload.comment,
        };
      });
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
