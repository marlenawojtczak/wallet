import { createSlice } from "@reduxjs/toolkit";
import {
  signIn,
  signOut,
  signUp,
  currentUser,
  refreshAuthTokens,
} from "./operations.js";

const initialState = {
  user: null,
  session: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.session = payload.session;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = payload.message;
};

const handleRefresh = (state) => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const singUpSession = (state, { payload }) => {
  state.user = payload.user;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = null;
};

const resetSession = () => {
  return { ...initialState };
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, singUpSession)
      .addCase(signUp.rejected, handleRejected)
      .addCase(signIn.pending, handlePending)
      .addCase(signIn.fulfilled, handleFulfilled)
      .addCase(signIn.rejected, handleRejected)
      .addCase(signOut.pending, handlePending)
      .addCase(signOut.fulfilled, resetSession)
      .addCase(signOut.rejected, handleRejected)
      .addCase(currentUser.pending, handleRefresh)
      .addCase(currentUser.fulfilled, handleFulfilled)
      .addCase(currentUser.rejected, handleRejected)
      .addCase(refreshAuthTokens.pending, handlePending)
      .addCase(refreshAuthTokens.fulfilled, handleFulfilled)
      .addCase(refreshAuthTokens.rejected, handleRejected);
  },
});

export const sessionReducer = sessionSlice.reducer;
