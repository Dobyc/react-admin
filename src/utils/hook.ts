import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import type { Props } from "@/types";
import { isValidKey } from "./index";

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePageSelector = (props: Props): any => {
  return useSelector((state: RootState): any => {
    // console.log("state", state);
    if (isValidKey(props.route, state)) {
      return state[props.route];
    } else {
      console.error(`usePageSelector error: 没有找到${props.route}`);
      return {};
    }
  });
};
