import { createSlice } from "@reduxjs/toolkit";
import { fetchTotals, fetchTotalsByDate } from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
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
      });
  },
});

export const { resetFinance } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
