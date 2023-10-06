import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
  },
};

const sessionSlice = createSlice({
  name: "finance",
  initialState,
  extraReducers: {},
});

export const sessionReducer = sessionSlice.reducer;
