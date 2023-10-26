import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import { globalReducer } from "./global/globalSlice";
import { sessionReducer } from "./session/sessionSlice";
import { financeReducer } from "./finance/financeSlice";
import { signOut } from "./session/operations";

const appReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
  finance: financeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === `${signOut.fulfilled}`) {
    state = undefined;
  }

  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["session", "accessToken", "refreshToken"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
