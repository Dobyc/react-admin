// ahook v3.7.6
import { useCallback, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import useUnmountedRef from "@/hooks/useUnmountedRef";

function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

function useSafeState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

function useSafeState<S>(initialState?: S | (() => S)) {
  const unmountedRef = useUnmountedRef();
  const [state, setState] = useState(initialState);

  const setCurrentState = useCallback((currentState: SetStateAction<S | undefined>) => {
    /** if component is unmounted, stop update */
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);

  return [state, setCurrentState] as const;
}

export default useSafeState;
