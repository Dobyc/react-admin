import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app";

const otherReducers: Record<string, any> = {};
const modules = import.meta.glob("../pages/**/slice.ts", { eager: true });
Object.values(modules).forEach((item) => {
  // @ts-ignore
  otherReducers[item.slice.name] = item.default;
});

const store = configureStore({
  reducer: {
    app: appReducer,
    ...otherReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
