import { setToken, resetSession } from "./sessionSlice";
import { resetFinance } from "../../redux/finance/financeSlice";
import {
  resetGlobal,
  closeModalLogout,
  setIsLoading,
} from "../../redux/global/globalSlice.js";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "session/signUp",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const res = await api.post("/api/auth/sign-up", credentials);
      setAuthHeader(res.data.user.accessToken);
      thunkAPI.dispatch(setIsLoading(false));
      return res.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "session/signIn",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    try {
      const res = await api.post("/api/auth/sign-in", credentials);
      setAuthHeader(res.data.user.accessToken);
      thunkAPI.dispatch(setToken(res.data.user.accessToken));
      thunkAPI.dispatch(setIsLoading(false));
      return res.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "session/signOut",
  async (token, { dispatch }) => {
    dispatch(setIsLoading(true));
    try {
      await api.post(
        "/api/auth/sign-out",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(resetSession());
      dispatch(resetGlobal());
      dispatch(resetFinance());
      clearAuthHeader();
      dispatch(setIsLoading(false));
    } catch (error) {
      dispatch(setIsLoading(false));
      toast.error("Oops something went wrong during logout.");
      dispatch(closeModalLogout());
      throw error;
    }
  }
);

export const currentUser = createAsyncThunk(
  "session/current",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    const state = thunkAPI.getState();
    const persistedToken = state.session.user.accessToken;
    if (!persistedToken) {
      thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await api.get("api/users/current");
      // thunkAPI.dispatch(setIsLoading(false));
      return res.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
