import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import toast from "react-hot-toast";

const mock = new MockAdapter(axios);
axios.defaults.baseURL = "https://auth-qa.qencode.com/v1/auth";

const token = createAsyncThunk("auth", async (access_id, thunkAPI) => {
  try {
    const res = await axios.post("/access-token", access_id);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (refresh_token, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("unable to fetch user");
    }
    try {
      const res = await axios.post("/refresh-token", refresh_token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "/login",
  async (credentials, thunkAPI) => {
    try {
      mock.onPost("/login").reply(200, { access_token: "111" });
      const { data } = await toast.promise(axios.post("/login", credentials), {
        loading: "Loading",
        success: "Logged in",
        error: "Something wrong",
      });
      thunkAPI.dispatch(token(data.access_token));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "/password-reset",
  async (credentials, thunkAPI) => {
    try {
      mock.onPost("/password-reset").reply(200, { access_token: "111" });
      const { data } = await toast.promise(
        axios.post("/password-reset", credentials),
        {
          loading: "Loading",
          success: "Email send",
          error: "Something wrong",
        }
      );
      thunkAPI.dispatch(token(data.access_token));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);

export const setNewPassword = createAsyncThunk(
  "/password-set",
  async (credentials, thunkAPI) => {
    try {
      mock.onPost("/password-set").reply(200, { access_token: "mocked_token" });
      const { data } = await toast.promise(
        axios.post("/password-set", credentials),
        {
          loading: "Loading",
          success: "new password created",
          error: "Something wrong",
        }
      );
      thunkAPI.dispatch(token(data.access_token));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
