import { useSelector } from "react-redux";
import { RootState } from "./store";

export function useCurrentThing() {
  return useSelector((store: RootState) => store.things.currentThing);
}
