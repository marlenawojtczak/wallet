import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const sessionSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {},
});

export const sessionReducer = sessionSlice.reducer;
