import { thingsActions } from "./store";
import { useDispatch } from "react-redux";

export function useAddThing() {
  const dispatch = useDispatch();
  return (name: string) => dispatch(thingsActions.addThing(name));
}
