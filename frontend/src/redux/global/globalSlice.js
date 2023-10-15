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
  },
});

export const {
  openModalLogout,
  closeModalLogout,
  openModalAddTransaction,
  closeModalAddTransaction,
  openLoading,
  closeLoading,
  resetGlobal,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
