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
      state.user = action.payload;
      state.session = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
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

      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.accessToken;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.session = action.payload.session;
        state.token = action.payload.user.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.session = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.session = action.payload.session;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(refreshAuthTokens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshAuthTokens.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.session = action.payload.session;
        state.token = action.payload.user.accessToken;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshAuthTokens.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setUser, setToken, setRefreshing, resetSession } =
  sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
