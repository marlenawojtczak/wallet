import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalLogoutOpen: false,
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
  },
});

export const { openModalLogout, closeModalLogout, resetGlobal } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;
