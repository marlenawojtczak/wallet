import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openModalLogout: (state) => {
      state.isModalLogoutOpen = true;
    },
    closeModalLogout: (state) => {
      state.isModalLogoutOpen = false;
    },
    resetGlobal: () => {
      return { ...initialState };
    },
    openModalAddTransaction: (state) => {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction: (state) => {
      state.isModalAddTransactionOpen = false;
    },
    openLoading: (state) => {
      state.isLoading = true;
    },
    closeLoading: (state) => {
      state.closeLoading = false;
    },
    openModalEditTransaction: (state) => {
      state.isModalEditTransactionOpen = true;
    },
    closeModalEditTransaction: (state) => {
      state.isModalEditTransactionOpen = false;
    },
  },
});

export const {
  openModalLogout,
  closeModalLogout,
  openModalAddTransaction,
  closeModalAddTransaction,
  openLoading,
  closeLoading,
  openModalEditTransaction,
  closeModalEditTransaction,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
