import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {},
});

export const financeReducer = financeSlice.reducer;
