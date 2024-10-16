import { useThingsStore } from "./useData";

export function useAllThings() {
  return useThingsStore((state) => state.things).map(({ id }) => id);
}
