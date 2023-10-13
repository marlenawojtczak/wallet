import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectAccessToken } from "../session/selectors";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

export const fetchTotals = createAsyncThunk(
  "finance/fetchTotals",
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.get("/api/transactions/categories", {
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

export const fetchTotalsByDate = createAsyncThunk(
  "finance/fetchTotalsByDate",
  async ({ month, year }, thunkAPI) => {
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

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "finance/fetchTransactions",
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      const response = await api.get(`/api/transactions`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Test", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
