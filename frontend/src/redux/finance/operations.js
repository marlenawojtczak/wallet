import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectAccessToken } from "../session/selectors";
import { openLoading, closeLoading } from "../../redux/global/globalSlice";
import { showToast } from "../../utils/helperFunctions";

const api = axios.create({
  baseURL: "https://uwallet.pl",
  // baseURL: "http://localhost:3000",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchTotals = createAsyncThunk(
  "finance/fetchTotals",
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const response = await api.get("/api/transactions/categories", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const fetchTotalsByDate = createAsyncThunk(
  "finance/fetchTotalsByDate",
  async ({ month, year }, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const response = await api.get(
        `/api/transactions/categories/${year}/${month}`,
        setAuthHeader(accessToken)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  "finance/fetchTransactions",
  async (_, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const response = await api.get(
        "/api/transactions",
        setAuthHeader(accessToken)
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (credentials, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const res = await api.post(
        "/api/transactions",
        credentials,
        setAuthHeader(accessToken)
      );
      showToast("Success! Transaction added to your list.", "success");

      return res.data;
    } catch (error) {
      showToast("Cannot add transaction.", "error");
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  "finance/deleteTransaction",
  async (id, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      await api.delete(`/api/transactions/${id}`, setAuthHeader(accessToken));
      showToast("Transaction removed from your list.", "info");
      return `Deleted transaction: ${id}`;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "finance/updateTransaction",
  async ({ id, values }, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const response = await api.patch(
        `/api/transactions/${id}`,
        values,
        setAuthHeader(accessToken)
      );
      showToast("Success! Transaction updated.", "success");
      return { id: id, updatedTransaction: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);
