import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectAccesssToken } from "../session/selectors";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

export const fetchTotals = createAsyncThunk(
  "finance/fetchTotals",
  async (_, thunkAPI) => {
    const accessToken = selectAccesssToken(thunkAPI.getState());
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
    const accessToken = selectAccesssToken(thunkAPI.getState());
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

export const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (credentials, thunkAPI) => {
    const accessToken = selectAccesssToken(thunkAPI.getState());
    console.log("accesToken", accessToken);
    try {
      const res = await api.post("/api/transactions", {
        credentials,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
