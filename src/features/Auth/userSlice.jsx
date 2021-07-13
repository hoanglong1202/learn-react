import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);
  const { jwt, user } = data;

  localStorage.setItem("access_token", jwt);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);
  const { jwt, user } = data;

  localStorage.setItem("access_token", jwt);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
