import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import localforage from "localforage";
import type { AppThunk } from "@/store";

const initialState: UserState = {
  token: "",
  loginStatus: "idle",
  info: {},
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localforage.setItem("token", action.payload);
    },
    setInfo: (state, action: PayloadAction<UserInfo>) => {
      state.info = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const login =
  (params: object): AppThunk =>
  (dispatch, getState) => {
    axios.post("/login", params).then((res) => {
      console.log("res", res);
      if (res.success) {
        dispatch(setToken(res.data));
      }
    });
  };

export const getLoginUser = (): AppThunk => (dispatch, getState) => {
  console.log("getLoginUser");
  axios.get("/getLoginUser", { requestOnly: true }).then((res) => {
    if (res.success) {
      dispatch(setInfo(res.data));
    }
  });
};

export const { setToken, setInfo } = slice.actions;

export default slice.reducer;
