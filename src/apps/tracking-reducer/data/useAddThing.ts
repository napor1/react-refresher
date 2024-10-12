import { useData } from "./useData";

export function useAddThing() {
  return useData((context) => context!.actions.addThing);
}
