import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOut, signUp, refreshUser } from "./operations.js";

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUser: (state, action) => {
      // console.log("setUser action dispatched with payload:", action.payload);
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setToken: (state, action) => {
      // console.log("State before update:", state);
      // console.log("setToken action dispatched with payload:", action.payload);
      state.token = action.payload;
      // console.log("State after update:", state);
    },
    setRefreshing: (state, action) => {
      state.isRefreshing = action.payload;
    },
    resetSession: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        // console.log(
        //   "signIn fulfilled with action.payload.user:",
        //   action.payload.user
        // );
        state.user = action.payload.user;
        state.token = action.payload.user.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { setUser, setToken, setRefreshing, resetSession } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
