import { createSlice } from "@reduxjs/toolkit";
import { fetchTotals } from "./operations";

const initialState = {
  totalIncome: 0,
  totalExpense: 0,
  totalBalance: 0,
  totals: [],
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTotals.fulfilled, (state, action) => {
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

export const financeReducer = financeSlice.reducer;
