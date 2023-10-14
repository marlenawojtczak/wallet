import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectAccessToken } from "../session/selectors";
import { setIsLoading } from "../global/globalSlice";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

export const fetchTotals = createAsyncThunk(
  "finance/fetchTotals",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.get("/api/transactions/categories", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      thunkAPI.dispatch(setIsLoading(false));
      return response.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTotalsByDate = createAsyncThunk(
  "finance/fetchTotalsByDate",
  async ({ month, year }, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.get(
        `/api/transactions/categories/${year}/${month}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      thunkAPI.dispatch(setIsLoading(false));
      return response.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "finance/fetchTransactions",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.get("/api/transactions", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      thunkAPI.dispatch(setIsLoading(false));
      return response.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (credentials, thunkAPI) => {
    thunkAPI.dispatch(setIsLoading(true));
    const accessToken = selectAccessToken(thunkAPI.getState());
    console.log("accesToken", accessToken);
    try {
      const res = await api.post("/api/transactions", {
        credentials,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      thunkAPI.dispatch(setIsLoading(false));
      return res.data;
    } catch (error) {
      // thunkAPI.dispatch(setIsLoading(false));
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "finance/deleteTransaction",
  async (id, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      await api.delete(`/api/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return `Deleted transaction: ${id}`;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "finance/updateTransaction",
  async (id, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.patch(`/api/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
