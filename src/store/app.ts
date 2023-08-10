import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from ".";
import { setInfo } from "./user";
import axios from "@/utils/axios";
import localforage from "localforage";

const initialState: AppState = {
  siteName: "",
  apps: [],
  menus: [],
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSiteName: (state, action) => {
      state.siteName = action.payload;
    },
    setApps: (state, action) => {
      state.apps = action.payload;
    },
    setMenus: (state, action) => {
      state.menus = action.payload || [];
      localforage.setItem(
        "auths",
        state.menus.map((item: { code: string }) => item.code)
      );
    },
  },
});

export const getAuths = (): AppThunk => (dispatch, getState) => {
  axios.get("/getAuths", { requestOnly: true }).then((res) => {
    if (res.success) {
      dispatch(setApps(res.data.apps));
      dispatch(setMenus(res.data.menus));
    }
  });
};

export const { setSiteName, setMenus, setApps } = slice.actions;

export default slice.reducer;
