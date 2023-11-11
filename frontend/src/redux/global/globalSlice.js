import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isLoading: false,
  isModalTeamOpen: false,
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
      state.isLoading = false;
    },
    openModalEditTransaction: (state, action) => {
      state.isModalEditTransactionOpen = action.payload;
    },
    closeModalEditTransaction: (state) => {
      state.isModalEditTransactionOpen = false;
    },
    openModalTeam: (state) => {
      state.isModalTeamOpen = true;
    },
    closeModalTeam: (state) => {
      state.isModalTeamOpen = false;
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
  openModalTeam,
  closeModalTeam,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
