import { useData } from "./useData";

export function useAllThings(): string[] {
  return useData((context) => {
    return context!.state.things.map((item) => item.id);
  });
}
