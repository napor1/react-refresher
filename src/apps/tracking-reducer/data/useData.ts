import { useContextSelector } from "use-context-selector";
import { DataContext, ThingsContext } from "./DataContext";

export function useData<T>(selector: (value: ThingsContext | null) => T): T {
  return useContextSelector(DataContext, selector);
}
