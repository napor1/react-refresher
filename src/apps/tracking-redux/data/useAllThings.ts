import { useSelector } from "react-redux";
import { RootState } from "./store";

export function useAllThings() {
  return useSelector((store: RootState) => store.things.things).map(({ id }) => id);
}
