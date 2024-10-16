import { RootState, thingsActions } from "./store";
import { useDispatch, useSelector } from "react-redux";

export function useThing(id: string) {
  const thing = useSelector((store: RootState) =>
    store.things.things.find((t) => t.id === id)
  );
  const dispatch = useDispatch();
  return {
    thing,
    seeThing: () => dispatch(thingsActions.seeThing(id)),
    removeThing: () => dispatch(thingsActions.removeThing(id)),
    doThing: () => dispatch(thingsActions.doThing(id)),
    seeAllThings: () => dispatch(thingsActions.seeAllThings()),
    undoThing: (index: number) =>
      dispatch(thingsActions.undoThing({ id, index })),
    undoLastThing: () =>
      dispatch(thingsActions.undoThing({ id, index: thing!.done.length - 1 })),
  };
}
