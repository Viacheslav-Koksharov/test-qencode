import { authReducer } from "./slices/auth/slice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigAuth = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedReducerAuth = persistReducer(persistConfigAuth, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducerAuth,
});
