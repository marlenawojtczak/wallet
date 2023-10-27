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

import { globalReducer } from "./global/globalSlice";
import { sessionReducer } from "./session/sessionSlice";
import { financeReducer } from "./finance/financeSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "session"],
};

export const store = configureStore({
  reducer: {
    session: persistReducer(persistConfig, sessionReducer),
    global: globalReducer,
    finance: financeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
