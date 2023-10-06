import { createSlice } from "@reduxjs/toolkit";
import { openModalLogoutAction, closeModalLogoutAction } from "./operations";

const initialState = {
  isModalLogoutOpen: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  extraReducers: {
    openModalLogout: openModalLogoutAction,
    closeModalLogout: closeModalLogoutAction,
  },
});

export const { openModalLogout, closeModalLogout } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
