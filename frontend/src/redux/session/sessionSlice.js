import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    isLoggedIn: false,
    // isRefreshing: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    // setRefreshing: (state, action) => {
    //   state.isRefreshing = action.payload;
    // },
  },
});

export const { setUser } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
