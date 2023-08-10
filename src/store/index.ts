import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appReducer from "./app";
import userReducer from "./user";

const otherReducers: Record<string, any> = {};
const modules = import.meta.glob("../pages/**/slice.ts", { eager: true });
Object.values(modules).forEach((item) => {
  // @ts-ignore
  otherReducers[item.slice.name] = item.default;
});

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    ...otherReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
