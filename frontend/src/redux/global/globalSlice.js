import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const globalSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {},
});

export const globalReducer = globalSlice.reducer;
