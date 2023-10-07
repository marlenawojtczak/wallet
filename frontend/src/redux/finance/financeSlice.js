import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
  },
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {},
});

export const financeReducer = financeSlice.reducer;
