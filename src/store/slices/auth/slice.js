import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  resetPassword,
  setNewPassword,
  refreshUser,
} from "../../operations/authOpps";

const initialState = {
  user: { email: "", password: "" },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(setNewPassword.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
