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

import { globalReducer } from "./global/globalSlice";
import { sessionReducer } from "./session/sessionSlice";
import { financeReducer } from "./finance/financeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    session: sessionReducer,
    finance: financeReducer,
  },
  middleware: [thunkMiddleware],
});

export const persistor = persistStore(store);
