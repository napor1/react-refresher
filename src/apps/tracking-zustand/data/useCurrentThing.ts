import { useThingsStore } from "./useData";

export function useCurrentThing() {
  return useThingsStore(state => state.currentThing)
}
