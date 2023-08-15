import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { reducer } from "./reducer";

// store.dispatch({ type: "increment", payload: 1 });
// console.log("store.getState() :>> ", store.getState());

const persistConfig = {
  key: "todo",
  storage,
  blacklist: ["counter"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store);
