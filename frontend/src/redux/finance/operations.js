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
      const response = await api.get("/api/transactions", {
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

export const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (credentials, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    try {
      console.log("Przed zapytaniem", credentials);
      const res = await api.post("/api/transactions", credentials, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Po zapytaniu", res.data);
      return res.data;
    } catch (error) {
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
