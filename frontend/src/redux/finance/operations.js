import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { selectAccessToken } from "../session/selectors";
import { openLoading, closeLoading } from "../../redux/global/globalSlice";
import Notiflix from "notiflix";

const api = axios.create({
  baseURL: "https://wallet.dupawklamerkach.pl",
});

export const editTransactionAction = (state, action) => {
  const { id, updatedTransaction } = action.payload;
  const index = state.transactions.findIndex(
    (transaction) => transaction._id === id
  );
  if (index !== -1) {
    state.transactions[index] = {
      ...state.transactions[index],
      ...updatedTransaction,
    };
  }
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
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
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
      const response = await api.get("/api/transactions", {
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

export const addTransaction = createAsyncThunk(
  "finance/addTransaction",
  async (credentials, thunkAPI) => {
    const accessToken = selectAccessToken(thunkAPI.getState());
    thunkAPI.dispatch(openLoading());
    try {
      const res = await api.post("/api/transactions", credentials, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      Notiflix.Notify.success("Successs! Transaction added to your list", {
        width: "300px",
        position: "center-top",
        distance: "18px",
        svgSize: "120px",
        timeout: 2200,
        borderRadius: "20px",
        fontFamily: "Poppins",
        fontSize: "16px",
      });
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure("Cannot add transaction", {
        width: "300px",
        position: "center-top",
        distance: "18px",
        svgSize: "120px",
        timeout: 2200,
        borderRadius: "20px",
        fontFamily: "Poppins",
        fontSize: "16px",
      });
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
      await api.delete(`/api/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      Notiflix.Notify.info("Transaction removed from your list", {
        width: "300px",
        position: "center-top",
        distance: "18px",
        svgSize: "120px",
        timeout: 2200,
        borderRadius: "20px",
        fontFamily: "Poppins",
        fontSize: "16px",
      });
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
      console.log("Przed zapytaniem id", id);
      console.log("Przed zapytaniem data", values);
      const response = await api.patch(`/api/transactions/${id}`, values, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Po zapytaniu id", id);
      console.log("Po zapytaniu data", response.data);
      return { id: id, updatedTransaction: response.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      thunkAPI.dispatch(closeLoading());
    }
  }
);
