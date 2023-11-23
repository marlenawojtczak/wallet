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
import { resetFinance } from "../finance/financeSlice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "../../utils/helperFunctions.js";

const api = axios.create({
  baseURL: "https://uwallet.pl",
  // baseURL: "http://localhost:3000",
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
      const dataToSend = {
        ...credentials,
        originDomain: credentials.originDomain,
      };

      const res = await api.post("/api/auth/sign-up", dataToSend);
      setAuthHeader(res.data.user.accessToken);
      showToast(
        "Register successful. Verification link sent to your email.",
        "success"
      );

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
      const isVerified = error.response?.data?.verify;
      const emailExist = error.response?.data?.email;

      if (!emailExist) {
        showToast("User with that email does not exist", "error");
      } else {
        if (!isVerified) {
          showToast("Verify your email first.", "error");
        } else {
          showToast("Email or password you have entered is invalid.", "error");
        }
      }

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
      showToast("Oops something went wrong during logout.", "error");
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
    const accessToken = selectAccessToken(thunkAPI.getState());
    if (!accessToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    thunkAPI.dispatch(openLoading());
    try {
      setAuthHeader(accessToken);
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
      setAuthHeader(refreshToken);
      const res = await api.post("api/auth/refresh", { sid: credentials });
      replaceAuthHeader(res.data.user.accessToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
