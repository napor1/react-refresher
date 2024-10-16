import { PropsWithChildren, useEffect } from "react";
import { store, STORAGE_KEY } from "./store";
import { Provider } from "react-redux";

export function DataProvider({ children }: PropsWithChildren) {
  useEffect(
    () =>
      store.subscribe(() =>
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(store.getState().things)
        )
      ),
    []
  );
  return <Provider store={store}>{children}</Provider>;
}
