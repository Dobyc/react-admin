import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { isValidKey } from "@/utils";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePageSelector = (props: Props): any => {
  return useSelector((state: RootState): any => {
    if (isValidKey(props.route, state)) {
      return state[props.route];
    } else {
      console.error(`usePageSelector error: 没有找到${props.route}`);
      return {};
    }
  });
};

export { default as useSafeState } from "./useSafeState";
export { default as useUnmountedRef } from "./useUnmountedRef";
