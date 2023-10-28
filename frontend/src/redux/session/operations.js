import { resetFinance } from "../../redux/finance/financeSlice";
import {
  selectAccessToken,
  selectRefreshToken,
} from "../../redux/session/selectors";
import {
  resetGlobal,
  closeModalLogout,
  openLoading,
  closeLoading,
} from "../../redux/global/globalSlice.js";

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const replaceAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "session/signUp",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(openLoading());
    try {
      const res = await api.post("/api/auth/sign-up", credentials);
      setAuthHeader(res.data.user.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const signIn = createAsyncThunk(
  "session/signIn",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(openLoading());
    try {
      const res = await api.post("/api/auth/sign-in", credentials);
      setAuthHeader(res.data.user.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const signOut = createAsyncThunk(
  "session/signOut",
  async (credentials, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      await api.post(
        "/api/auth/sign-out",
        { _id: credentials },
        setAuthHeader(accessToken)
      );
      thunkAPI.dispatch(resetGlobal());
      thunkAPI.dispatch(resetFinance());
      clearAuthHeader();
    } catch (error) {
      toast.error("Oops something went wrong during logout.");
      thunkAPI.dispatch(closeModalLogout());
      throw error;
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const currentUser = createAsyncThunk(
  "session/current",
  async (_, thunkAPI) => {
    const refreshToken = selectRefreshToken(thunkAPI.getState());
    if (!refreshToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    thunkAPI.dispatch(openLoading());
    try {
      setAuthHeader(refreshToken);
      const res = await api.get("api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const refreshAuthTokens = createAsyncThunk(
  "session/refresh",
  async (credentials, thunkAPI) => {
    const refreshToken = selectRefreshToken(thunkAPI.getState());
    if (!refreshToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const res = await api.post("api/auth/refresh", { sid: credentials });
      console.log(res.data.user.accessToken);
      replaceAuthHeader(res.data.user.accessToken);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
