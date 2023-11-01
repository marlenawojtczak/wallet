import axios from "axios";
import Notiflix from "notiflix";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectAccessToken } from "../session/selectors";
import { openLoading, closeLoading } from "../../redux/global/globalSlice";
import { toastifyOptions } from "../../utils/helperFunctions";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
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
      Notiflix.Notify.success(
        "Successs! Transaction added to your list",
        toastifyOptions
      );

      return res.data;
    } catch (error) {
      Notiflix.Notify.failure("Cannot add transaction", toastifyOptions);
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
      Notiflix.Notify.info(
        "Transaction removed from your list",
        toastifyOptions
      );
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
      Notiflix.Notify.success("Successs! Transaction updated", toastifyOptions);
      return { id: id, updatedTransaction: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);
