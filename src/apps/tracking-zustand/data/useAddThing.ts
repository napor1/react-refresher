import { useThingsStore } from "./useData";

export function useAddThing() {
  return useThingsStore((state) => state.addThing);
}
