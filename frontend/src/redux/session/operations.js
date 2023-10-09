import { setToken } from "./sessionSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "http:/wallet.dupawklamerkach.pl:3000",
});

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signUp = createAsyncThunk(
  "session/signUp",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/api/auth/sign-up", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "session/signIn",
  async (credentials, thunkAPI) => {
    try {
      const res = await api.post("/api/auth/sign-in", credentials);
      setAuthHeader(res.data.token);
      thunkAPI.dispatch(setToken(res.data.token));
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "session/signOut",
  async (_, thunkAPI) => {
    try {
      await api.post("/api/auth/sign-out");
      clearAuthHeader();
      thunkAPI.dispatch(setToken(null));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
